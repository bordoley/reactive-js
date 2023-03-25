import * as Object from "../__internal__/Object.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import {
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_replace,
} from "../__internal__/symbols.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import {
  Function1,
  Optional,
  Updater,
  bind,
  compose,
  error,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { SchedulerLike } from "../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DisposableLike_dispose,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";

export {
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_replace,
};

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

/**
 * @noInheritDoc
 * @category Container
 */
export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  readonly [WindowLocationStreamLike_canGoBack]: ObservableLike<boolean>;

  [WindowLocationStreamLike_goBack](): void;

  [WindowLocationStreamLike_replace](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): boolean;
}
const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

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
    pipe(
      observer,
      Disposable.onDisposed(_ => {
        eventSource.removeEventListener(errorEvent, onError);

        for (const ev of events) {
          eventSource.removeEventListener(ev, listener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      observer[QueueableLike_push]({
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    const onError = (e: unknown) => {
      observer[DisposableLike_dispose](error(e));
    };

    eventSource.addEventListener(errorEvent, onError);

    for (const ev of events) {
      eventSource.addEventListener(ev, listener);
    }
  });
};

export const addEventListener =
  <T>(
    eventName: string,
    selector: Function1<Event, T>,
  ): Function1<EventTarget, ObservableLike<T>> =>
  target =>
    Observable.create(observer => {
      pipe(
        observer,
        Disposable.onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: Event) => {
        const result = selector(event);
        observer[QueueableLike_push](result);
      };

      target.addEventListener(eventName, listener, { passive: true });
    });

export const windowLocation: StreamableLike<
  Updater<WindowLocationURI> | WindowLocationURI,
  WindowLocationURI,
  WindowLocationStreamLike
> = /*@__PURE__*/ (() => {
  const { history, location } = window;

  const windowLocationPrototype = {
    toString(this: WindowLocationURI) {
      const { path, query, fragment } = this;
      let uri =
        path.length === 0 ? "/" : !path.startsWith("/") ? `/_{path}` : path;
      uri = query.length > 0 ? `${uri}?${query}` : uri;
      uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
      return newInstance(URL, uri, location.href).toString();
    },
  };

  const createWindowLocationURIWithPrototype = (
    uri: WindowLocationURI,
  ): WindowLocationURI =>
    uri.toString === windowLocationPrototype.toString
      ? uri
      : Object.create(
          windowLocationPrototype,
          Object.getOwnPropertyDescriptors(uri),
        );

  const getCurrentWindowLocationURI = (): WindowLocationURI => {
    const {
      pathname: path,
      search: query,
      hash: fragment,
    } = newInstance(URL, location.href);

    return createWindowLocationURIWithPrototype({
      path,
      query: query.slice(1),
      fragment: fragment.slice(1),
      title: document.title,
    });
  };

  type TState = {
    replace: boolean;
    uri: WindowLocationURI;
    counter: number;
  };

  const areWindowLocationStatesEqual = (
    { uri: a, counter: counterA }: TState,
    { uri: b, counter: counterB }: TState,
  ) =>
    // Intentionally ignore the replace flag.
    (a === b && counterA === counterB) ||
    (a.title === b.title &&
      a.path === b.path &&
      a.query === b.query &&
      a.fragment === b.fragment &&
      counterA === counterB);

  const createWindowLocationStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin()),
      function WindowLocationStream(
        instance: Pick<
          WindowLocationStreamLike,
          | typeof MulticastObservableLike_observerCount
          | typeof DispatcherLike_scheduler
          | typeof DispatcherLike_complete
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof QueueableLike_push
          | typeof QueueableLike_maxBufferSize
          | typeof WindowLocationStreamLike_canGoBack
          | typeof WindowLocationStreamLike_goBack
          | typeof WindowLocationStreamLike_replace
          | typeof ObservableLike_observe
        >,
        delegate: StreamLike<Updater<TState>, TState>,
      ): WindowLocationStreamLike {
        init(Disposable_delegatingMixin(), instance, delegate);

        return instance;
      },
      props<unknown>({}),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },

        get [DispatcherLike_scheduler](): SchedulerLike {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },

        get [WindowLocationStreamLike_canGoBack](): ObservableLike<boolean> {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return pipe(
            this[DelegatingLike_delegate],
            Observable.map<TState, boolean>(({ counter }) => counter > 0),
          );
        },

        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        [DispatcherLike_complete](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
        ) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },

        [QueueableLike_push](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_push](
            prevState => {
              const uri = createWindowLocationURIWithPrototype(
                isFunction(stateOrUpdater)
                  ? stateOrUpdater(prevState.uri)
                  : stateOrUpdater,
              );

              return { uri, replace: false, counter: prevState.counter + 1 };
            },
          );
        },

        [WindowLocationStreamLike_replace](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_push](
            prevState => {
              const uri = createWindowLocationURIWithPrototype(
                isFunction(stateOrUpdater)
                  ? stateOrUpdater(prevState.uri)
                  : stateOrUpdater,
              );

              return { uri, replace: true, counter: prevState.counter };
            },
          );
        },

        [WindowLocationStreamLike_goBack](
          this: WindowLocationStreamLike,
        ): void {
          const canGoBack = this[WindowLocationStreamLike_canGoBack];

          if (canGoBack) {
            history.back();
          }
        },

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          observer: ObserverLike<WindowLocationURI>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            Observable.pick("uri"),
            Observable.observeWith(observer),
          );
        },
      },
    ),
  );

  let currentWindowLocationStream: Optional<WindowLocationStreamLike> = none;

  const createSyncToHistoryStream = (
    f: typeof history.pushState,
    scheduler: SchedulerLike,
    options: { readonly replay?: number; readonly maxBufferSize?: number },
  ) =>
    Streamable.create<TState, TState>(
      compose(
        Observable.throttle(100),
        Observable.forEach(({ counter, uri }) => {
          const { title } = uri;
          document.title = title;
          f({ title, counter }, "", String(uri));
        }),
      ),
    )[StreamableLike_stream](scheduler, options);

  const stream = (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number; readonly maxBufferSize?: number },
  ): WindowLocationStreamLike => {
    if (isSome(currentWindowLocationStream)) {
      raiseWithDebugMessage("Cannot stream more than once");
    }

    const { maxBufferSize } = options ?? {};

    const replaceState = createSyncToHistoryStream(
      bind(history.replaceState, history),
      scheduler,
      { maxBufferSize },
    );

    const pushState = createSyncToHistoryStream(
      bind(history.pushState, history),
      scheduler,
      {
        maxBufferSize,
      },
    );

    currentWindowLocationStream = pipe(
      Streamable.createWriteThroughCache(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
          // Initialize the counter to -1 so that the initized start value
          // get pushed through the updater.
          counter: -1,
        }),
        state =>
          // Initialize the history state on page load
          pipe(
            window,
            addEventListener("popstate", (e: Event) => {
              const { counter, title } = (e as any).state as {
                counter: number;
                title: string;
              };

              const uri = createWindowLocationURIWithPrototype({
                ...getCurrentWindowLocationURI(),
                title,
              });

              return { counter, replace: true, uri };
            }),
            Observable.startWith({
              counter: 0,
              replace: true,
              uri: state.uri,
            }),
            Observable.map(returns),
          ),
        (oldState, state) => {
          const locationChanged = String(state.uri) !== String(oldState.uri);
          const titleChanged = oldState.uri.title !== state.uri.title;

          let { replace } = state;
          const push = !replace && locationChanged;
          replace = replace || (titleChanged && !locationChanged);

          return pipe(
            state,
            Observable.fromOptional(),
            Observable.forEach(state => {
              if (replace) {
                replaceState[QueueableLike_push](state);
              } else if (push) {
                pushState[QueueableLike_push](state);
              }
            }),
            Observable.ignoreElements(),
          );
        },
        { equality: areWindowLocationStatesEqual },
      )[StreamableLike_stream](scheduler, options),
      createWindowLocationStream,
      Disposable.add(pushState),
      Disposable.add(replaceState),
    );

    return currentWindowLocationStream;
  };

  return {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
    [StreamableLike_stream]: stream,
  };
})();
