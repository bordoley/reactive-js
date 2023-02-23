import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import * as Promiseable from "../containers/Promiseable.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import {
  Function1,
  Optional,
  Updater,
  compose,
  error,
  isFunction,
  isSome,
  isString,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  unsafeCast,
} from "../functions.js";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../rx.js";
import * as MulticastObservable from "../rx/MulticastObservable.js";
import * as Observable from "../rx/Observable.js";
import * as Observer from "../rx/Observer.js";
import * as ReactiveContainer from "../rx/ReactiveContainer.js";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling.js";
import * as Dispatcher from "../scheduling/Dispatcher.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import Streamable_create from "../streaming/Streamable/__internal__/Streamable.create.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";

/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
  readonly title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  readonly path: string;
  readonly query: string;
  readonly fragment: string;
}

/** @ignore */
export const WindowLocationStreamLike_goBack = Symbol(
  "WindowLocationStreamLike_goBack",
);

/** @ignore */
export const WindowLocationStreamLike_canGoBack = Symbol(
  "WindowLocationStreamLike_canGoBack",
);

/**
 * @noInheritDoc
 * @category Container
 */
export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  [DispatcherLike_dispatch](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  readonly [WindowLocationStreamLike_canGoBack]: boolean;

  [WindowLocationStreamLike_goBack](): boolean;
}

/**
 * @noInheritDoc
 */
export interface WindowLocationStreamableLike
  extends StreamableLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI,
    WindowLocationStreamLike
  > {
  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike;
}

/**
 * @noInheritDoc
 */
export interface FetchRequest extends RequestInit {
  readonly uri: string;
}

const reservedEvents = ["error", "open"];

export const createEventSource = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): ObservableLike<{
  readonly id: string;
  readonly type: string;
  readonly data: string;
}> => {
  const { events: eventsOption = ["message"] } = options;
  const events = pipe(
    eventsOption,
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return Observable.create(observer => {
    const dispatcher = pipe(
      observer,
      Observer.getDispatcher,
      Disposable.onDisposed(_ => {
        for (const ev of events) {
          eventSource.removeEventListener(ev, listener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      pipe(
        dispatcher,
        Dispatcher.dispatch({
          id: ev.lastEventId ?? "",
          type: ev.type ?? "",
          data: ev.data ?? "",
        }),
      );
    };

    for (const ev of events) {
      eventSource.addEventListener(ev, listener);
    }
  });
};

export const fetch: <T>(
  onResponse: Function1<Response, Promise<T> | ObservableLike<T>>,
) => Function1<FetchRequest | string, ObservableLike<T>> =
  /*@__PURE__*/ (() => {
    const globalFetch = self.fetch;

    return <T>(
        onResponse: Function1<Response, Promise<T> | ObservableLike<T>>,
      ): Function1<FetchRequest | string, ObservableLike<T>> =>
      fetchRequest =>
        Observable.create(async observer => {
          const signal = Disposable.toAbortSignal(observer);

          let request: Optional<string | Request> = none;
          if (isString(fetchRequest)) {
            request = fetchRequest;
          } else {
            const { uri, ...requestInit } = fetchRequest;
            request = newInstance(Request, uri, requestInit);
          }

          // This try/catch is necessary because we await in the try block.
          try {
            const response = await globalFetch(request, { signal });

            const onResponseResult = onResponse(response);
            const resultObs =
              onResponseResult instanceof Promise
                ? pipe(onResponseResult, Promiseable.toObservable())
                : onResponseResult;

            pipe(resultObs, ReactiveContainer.sinkInto(observer));
          } catch (e) {
            pipe(observer, Disposable.dispose(error(e)));
          }
        });
  })();

export const addEventListener =
  <T>(
    eventName: string,
    selector: Function1<Event, T>,
  ): Function1<EventTarget, ObservableLike<T>> =>
  target =>
    Observable.create(observer => {
      const dispatcher = pipe(
        observer,
        Observer.getDispatcher,
        Disposable.onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: Event) => {
        const result = selector(event);
        pipe(dispatcher, Dispatcher.dispatch(result));
      };

      target.addEventListener(eventName, listener, { passive: true });
    });

export const windowLocation: WindowLocationStreamableLike =
  /*@__PURE__*/ (() => {
    const { history, location } = window;

    const windowLocationURIToString = ({
      path,
      query,
      fragment,
    }: WindowLocationURI): string => {
      let uri =
        path.length === 0 ? "/" : !path.startsWith("/") ? `/_{path}` : path;
      uri = query.length > 0 ? `${uri}?${query}` : uri;
      uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
      return newInstance(URL, uri, location.href).toString();
    };

    const getCurrentWindowLocationURI = (): WindowLocationURI => {
      const {
        pathname: path,
        search: query,
        hash: fragment,
      } = newInstance(URL, location.href);
      return {
        title: document.title,
        path,
        query: query.slice(1),
        fragment: fragment.slice(1),
      };
    };

    type TState = {
      replace: boolean;
      uri: WindowLocationURI;
    };

    type TAction = {
      replace: boolean;
      stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>;
    };

    const areWindowLocationStatesEqual = (
      { uri: a }: TState,
      { uri: b }: TState,
    ) =>
      // Intentionally ignore the replace flag.
      a === b ||
      (a.title === b.title &&
        a.path === b.path &&
        a.query === b.query &&
        a.fragment === b.fragment);

    const windowHistoryReplaceState = (
      instance: WindowLocationStreamLike & TProperties,
      title: string,
      uri: string,
    ) => {
      history.replaceState(
        { counter: instance[WindowLocationStream_historyCounter], title },
        "",
        uri,
      );
    };

    const windowHistoryPushState = (
      instance: WindowLocationStreamLike & TProperties,
      title: string,
      uri: string,
    ) => {
      instance[WindowLocationStream_historyCounter]++;
      history.pushState(
        { counter: instance[WindowLocationStream_historyCounter], title },
        "",
        uri,
      );
    };

    const WindowLocationStream_historyCounter = Symbol(
      "WindowLocationStream_historyCounter",
    );

    type TProperties = {
      [WindowLocationStream_historyCounter]: number;
    };

    const createWindowLocationStream = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin()),
        function WindowLocationStream(
          instance: Pick<
            WindowLocationStreamLike,
            | typeof MulticastObservableLike_observerCount
            | typeof MulticastObservableLike_replay
            | typeof DispatcherLike_scheduler
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof DispatcherLike_dispatch
            | typeof WindowLocationStreamLike_canGoBack
            | typeof WindowLocationStreamLike_goBack
            | typeof ReactiveContainerLike_sinkInto
          > &
            Mutable<TProperties>,
          delegate: StreamLike<TAction, TState>,
        ): WindowLocationStreamLike & TProperties {
          init(Disposable_delegatingMixin(), instance, delegate);
          instance[WindowLocationStream_historyCounter] = -1;

          return instance;
        },
        props<TProperties>({
          [WindowLocationStream_historyCounter]: -1,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
            return pipe(
              this[DelegatingLike_delegate],
              MulticastObservable.getObserverCount,
            );
          },

          get [MulticastObservableLike_replay](): number {
            unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
            return pipe(
              this[DelegatingLike_delegate],
              MulticastObservable.getReplay,
            );
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
            return pipe(this[DelegatingLike_delegate], Dispatcher.getScheduler);
          },

          get [WindowLocationStreamLike_canGoBack](): boolean {
            unsafeCast<TProperties>(this);
            return this[WindowLocationStream_historyCounter] > 0;
          },

          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          [DispatcherLike_dispatch](
            this: DelegatingLike<StreamLike<TAction, TState>>,
            stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
            { replace }: { replace: boolean } = { replace: false },
          ): void {
            pipe(
              { stateOrUpdater, replace },
              Dispatcher.dispatchTo(this[DelegatingLike_delegate]),
            );
          },

          [WindowLocationStreamLike_goBack](
            this: WindowLocationStreamLike,
          ): boolean {
            const canGoBack = this[WindowLocationStreamLike_canGoBack];

            if (canGoBack) {
              history.back();
            }

            return canGoBack;
          },

          [ReactiveContainerLike_sinkInto](
            this: DelegatingLike<StreamLike<TAction, TState>>,
            observer: ObserverLike<WindowLocationURI>,
          ): void {
            pipe(
              this[DelegatingLike_delegate],
              Observable.map(({ uri }) => uri),
              ReactiveContainer.sinkInto(observer),
            );
          },
        },
      ),
    );

    let currentWindowLocationStream: Optional<WindowLocationStreamLike> = none;

    return Streamable_create<
      Updater<WindowLocationURI> | WindowLocationURI,
      WindowLocationURI,
      WindowLocationStreamLike
    >((scheduler, options): WindowLocationStreamLike => {
      if (isSome(currentWindowLocationStream)) {
        raiseWithDebugMessage("Cannot stream more than once");
      }

      const actionReducer = pipe(
        Streamable.createActionReducer(
          ({ uri: stateURI }, { replace, stateOrUpdater }: TAction) => {
            const uri = isFunction(stateOrUpdater)
              ? stateOrUpdater(stateURI)
              : stateOrUpdater;
            return { uri, replace };
          },
          () => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
          }),
          { equality: areWindowLocationStatesEqual },
        ),
        Streamable.stream(scheduler, options),
      );

      const windowLocationStream = createWindowLocationStream(actionReducer);

      pipe(
        actionReducer,
        Observable.map(({ uri, replace }) => ({
          uri: windowLocationURIToString(uri),
          title: uri.title,
          replace,
        })),
        Observable.forkCombineLatest(
          compose(
            Observable.takeWhile(
              _ =>
                windowLocationStream[WindowLocationStream_historyCounter] ===
                -1,
            ),
            Observable.forEach(({ uri, title }) => {
              // Initialize the history state on page load
              windowLocationStream[WindowLocationStream_historyCounter]++;
              windowHistoryReplaceState(windowLocationStream, title, uri);
            }),
            Observable.ignoreElements(),
          ),
          compose(
            Observable.keep(({ replace, title, uri }) => {
              const titleChanged = document.title !== title;
              const uriChanged = uri !== location.href;

              return replace || (titleChanged && !uriChanged);
            }),
            Observable.throttle(100),
            Observable.forEach(({ title, uri }) => {
              document.title = title;
              windowHistoryReplaceState(windowLocationStream, title, uri);
            }),
            Observable.ignoreElements(),
          ),
          compose(
            Observable.keep(({ replace, uri }) => {
              const uriChanged = uri !== location.href;
              return !replace && uriChanged;
            }),
            Observable.throttle(100),
            Observable.forEach(({ title, uri }) => {
              document.title = title;
              windowHistoryPushState(windowLocationStream, title, uri);
            }),
            Observable.ignoreElements(),
          ),
        ),
        Observable.subscribe(scheduler),
        Disposable.addTo(windowLocationStream),
      );

      pipe(
        window,
        addEventListener("popstate", (e: Event) => {
          const { counter, title } = (e as any).state as {
            counter: number;
            title: string;
          };

          const uri = {
            ...getCurrentWindowLocationURI(),
            title,
          };

          return { counter, uri };
        }),
        Observable.forEach(({ counter, uri }) => {
          windowLocationStream[WindowLocationStream_historyCounter] = counter;
          windowLocationStream[DispatcherLike_dispatch](uri, { replace: true });
        }),
        Observable.subscribe(scheduler),
        Disposable.addTo(windowLocationStream),
      );

      return windowLocationStream;
    });
  })();
