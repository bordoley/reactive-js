import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins";
import { ignoreElements } from "../containers/ContainerLike";
import { toObservable } from "../containers/PromiseableLike";
import { keep } from "../containers/ReadonlyArrayLike";
import {
  Function1,
  Option,
  Updater,
  compose,
  getLength,
  isEmpty,
  isFunction,
  isSome,
  isString,
  newInstance,
  none,
  pipe,
  raise,
  unsafeCast,
} from "../functions";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../rx";
import { getObserverCount, getReplay } from "../rx/MulticastObservableLike";
import {
  create as createObservable,
  forEach as forEachObs,
  forkCombineLatest,
  keep as keepObs,
  keepT,
  map,
  subscribe,
  takeWhile,
  throttle,
} from "../rx/ObservableLike";
import { getDispatcher } from "../rx/ObserverLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";
import {
  dispatch,
  dispatchTo,
  getScheduler,
} from "../scheduling/DispatcherLike";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming";
import { createActionReducer, stream } from "../streaming/StreamableLike";
import StreamableLike__create from "../streaming/__internal__/StreamableLike/StreamableLike.create";
import {
  addTo,
  dispose,
  onDisposed,
  toAbortSignal,
} from "../util/DisposableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";

export type WindowLocationURI = {
  title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  path: string;
  query: string;
  fragment: string;
};

/** @ignore */
export const WindowLocationStreamLike_goBack = Symbol(
  "WindowLocationStreamLike_goBack",
);
export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  [DispatcherLike_dispatch](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  [WindowLocationStreamLike_goBack](): boolean;
}

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

export type FetchRequest = RequestInit & {
  uri: string;
};

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
    keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return createObservable(observer => {
    const dispatcher = pipe(
      observer,
      getDispatcher,
      onDisposed(_ => {
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
        dispatch({
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
        createObservable(async observer => {
          const signal = toAbortSignal(observer);

          let request: Option<string | Request> = none;
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
                ? pipe(onResponseResult, toObservable())
                : onResponseResult;

            pipe(resultObs, sinkInto(observer));
          } catch (cause) {
            pipe(observer, dispose({ cause }));
          }
        });
  })();

export const addEventListener =
  <T>(
    eventName: string,
    selector: Function1<Event, T>,
  ): Function1<EventTarget, ObservableLike<T>> =>
  target =>
    createObservable(observer => {
      const dispatcher = pipe(
        observer,
        getDispatcher,
        onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: Event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
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
      let uri = isEmpty(path) ? "/" : !path.startsWith("/") ? `/${path}` : path;
      uri = getLength(query) > 0 ? `${uri}?${query}` : uri;
      uri = getLength(fragment) > 0 ? `${uri}#${fragment}` : uri;
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
        { counter: instance.historyCounter, title },
        "",
        uri,
      );
    };

    const windowHistoryPushState = (
      instance: WindowLocationStreamLike & TProperties,
      title: string,
      uri: string,
    ) => {
      instance.historyCounter++;
      history.pushState({ counter: instance.historyCounter, title }, "", uri);
    };

    type TProperties = {
      readonly delegate: StreamLike<TAction, TState>;
      historyCounter: number;
    };

    const createWindowLocationStream = createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin),
        function WindowLocationStream(
          instance: Pick<
            WindowLocationStreamLike,
            | typeof MulticastObservableLike_observerCount
            | typeof MulticastObservableLike_replay
            | typeof DispatcherLike_scheduler
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof DispatcherLike_dispatch
            | typeof WindowLocationStreamLike_goBack
            | typeof ReactiveContainerLike_sinkInto
          > &
            Mutable<TProperties>,
          delegate: StreamLike<TAction, TState>,
        ): WindowLocationStreamLike & TProperties {
          init(DisposableLike__delegatingMixin, instance, delegate);

          instance.delegate = delegate;
          instance.historyCounter = -1;

          return instance;
        },
        props<TProperties>({
          delegate: none,
          historyCounter: -1,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return pipe(this.delegate, getObserverCount);
          },

          get [MulticastObservableLike_replay](): number {
            unsafeCast<TProperties>(this);
            return pipe(this.delegate, getReplay);
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            unsafeCast<TProperties>(this);
            return pipe(this.delegate, getScheduler);
          },

          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          [DispatcherLike_dispatch](
            this: TProperties,
            stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
            { replace }: { replace: boolean } = { replace: false },
          ): void {
            pipe({ stateOrUpdater, replace }, dispatchTo(this.delegate));
          },

          [WindowLocationStreamLike_goBack](this: TProperties): boolean {
            const canGoBack = this.historyCounter > 0;

            if (canGoBack) {
              history.back();
            }

            return canGoBack;
          },

          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<WindowLocationURI>,
          ): void {
            pipe(
              this.delegate,
              map(({ uri }) => uri),
              sinkInto(observer),
            );
          },
        },
      ),
    );

    let currentWindowLocationStream: Option<WindowLocationStreamLike> = none;

    return StreamableLike__create<
      Updater<WindowLocationURI> | WindowLocationURI,
      WindowLocationURI,
      WindowLocationStreamLike
    >((scheduler, options): WindowLocationStreamLike => {
      if (isSome(currentWindowLocationStream)) {
        raise("Cannot stream more than once");
      }

      const actionReducer = pipe(
        createActionReducer(
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
        stream(scheduler, options),
      );

      const windowLocationStream = createWindowLocationStream(actionReducer);

      pipe(
        actionReducer,
        map(({ uri, replace }) => ({
          uri: windowLocationURIToString(uri),
          title: uri.title,
          replace,
        })),
        forkCombineLatest(
          compose(
            takeWhile(_ => windowLocationStream.historyCounter === -1),
            forEachObs(({ uri, title }) => {
              // Initialize the history state on page load
              windowLocationStream.historyCounter++;
              windowHistoryReplaceState(windowLocationStream, title, uri);
            }),
            ignoreElements(keepT),
          ),
          compose(
            keepObs(({ replace, title, uri }) => {
              const titleChanged = document.title !== title;
              const uriChanged = uri !== location.href;

              return replace || (titleChanged && !uriChanged);
            }),
            throttle(100),
            forEachObs(({ title, uri }) => {
              document.title = title;
              windowHistoryReplaceState(windowLocationStream, title, uri);
            }),
            ignoreElements(keepT),
          ),
          compose(
            keepObs(({ replace, uri }) => {
              const uriChanged = uri !== location.href;
              return !replace && uriChanged;
            }),
            throttle(100),
            forEachObs(({ title, uri }) => {
              document.title = title;
              windowHistoryPushState(windowLocationStream, title, uri);
            }),
            ignoreElements(keepT),
          ),
        ),
        subscribe(scheduler),
        addTo(windowLocationStream),
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
        forEachObs(({ counter, uri }) => {
          windowLocationStream.historyCounter = counter;
          windowLocationStream[DispatcherLike_dispatch](uri, { replace: true });
        }),
        subscribe(scheduler),
        addTo(windowLocationStream),
      );

      return windowLocationStream;
    });
  })();
