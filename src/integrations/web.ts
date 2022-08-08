import { delegatingDisposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
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
  isSome,
  newInstance,
  none,
  pipe,
  raise,
} from "../functions";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainerLike_sinkInto,
  createObservable,
} from "../rx";
import { getObserverCount, getReplay } from "../rx/MulticastObservableLike";
import {
  forEach as forEachObs,
  forkCombineLatest,
  keep as keepObs,
  keepT,
  map,
  subscribe,
  takeWhile,
  throttle,
} from "../rx/ObservableLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  ObserverLike,
  SchedulerLike,
} from "../scheduling";
import {
  dispatch,
  dispatchTo,
  getScheduler,
} from "../scheduling/DispatcherLike";
import { getDispatcher } from "../scheduling/ObserverLike";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
  createActionReducer,
  createStreamble,
} from "../streaming";
import { stream } from "../streaming/StreamableLike";
import {
  addTo,
  dispose,
  onDisposed,
  toAbortSignal,
} from "../util/DisposableLike";

export interface WindowLocationURI {
  title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  path: string;
  query: string;
  fragment: string;
}

export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  [DispatcherLike_dispatch](
    this: WindowLocationStreamLike,
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  goBack(this: WindowLocationStreamLike): boolean;
}

export interface WindowLocationStreamableLike
  extends StreamableLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI,
    WindowLocationStreamLike
  > {
  [StreamableLike_stream](
    this: WindowLocationStreamableLike,
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
          if (typeof fetchRequest === "string") {
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
      self: WindowLocationStreamLike & TProperties,
      title: string,
      uri: string,
    ) => {
      history.replaceState({ counter: self.historyCounter, title }, "", uri);
    };

    const windowHistoryPushState = (
      self: WindowLocationStreamLike & TProperties,
      title: string,
      uri: string,
    ) => {
      self.historyCounter++;
      history.pushState({ counter: self.historyCounter, title }, "", uri);
    };

    type TProperties = {
      delegate: StreamLike<TAction, TState>;
      historyCounter: number;
    };

    const createWindowLocationStream = createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin),
        function WindowLocationStream(
          this: WindowLocationStreamLike & TProperties,
          delegate: StreamLike<TAction, TState>,
        ): WindowLocationStreamLike & TProperties {
          init(delegatingDisposableMixin, this, delegate);
          this.delegate = delegate;
          this.historyCounter = -1;
          return this;
        },
        {
          delegate: none,
          historyCounter: -1,
        },
        {
          get [MulticastObservableLike_observerCount]() {
            const self = this as unknown as TProperties;
            return pipe(self.delegate, getObserverCount);
          },

          get [MulticastObservableLike_replay](): number {
            const self = this as unknown as TProperties;
            return pipe(self.delegate, getReplay);
          },

          get [DispatcherLike_scheduler](): SchedulerLike {
            const self = this as unknown as TProperties;
            return pipe(self.delegate, getScheduler);
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

          goBack(this: TProperties): boolean {
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

    return createStreamble<
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
            const uri =
              typeof stateOrUpdater === "function"
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
          pipe(windowLocationStream, replaceWindowLocation(uri));
        }),
        subscribe(scheduler),
        addTo(windowLocationStream),
      );

      return windowLocationStream;
    });
  })();

export const replaceWindowLocation =
  (
    uri: Updater<WindowLocationURI> | WindowLocationURI,
  ): Function1<WindowLocationStreamLike, WindowLocationStreamLike> =>
  stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
  };
