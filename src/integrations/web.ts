import * as Object from "../__internal__/Object.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import {
  __WindowLocationStreamLike_canGoBack as WindowLocationStreamLike_canGoBack,
  __WindowLocationStreamLike_goBack as WindowLocationStreamLike_goBack,
  __WindowLocationStreamLike_replace as WindowLocationStreamLike_replace,
} from "../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../__internal__/util.js";
import {
  Optional,
  Updater,
  bindMethod,
  compose,
  error,
  invoke,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../functions.js";
import * as ReadonlyArray from "../keyed-containers/ReadonlyArray.js";
import { ObservableLike, ObservableLike_observe, ObserverLike } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { SchedulerLike } from "../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Stream from "../streaming/Stream.js";
import Stream_delegatingMixin from "../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  IndexedBufferCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  ReplayableLike_buffer,
} from "../util.js";
import Delegating_mixin from "../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../util/Disposable.js";
import IndexedBufferCollection_map from "../util/IndexedBufferCollection/__internal__/IndexedBufferCollection.map.js";
import * as Element from "./web/Element.js";

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
  const events = pipe(
    options.events ?? ["message"],
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
      observer[QueueableLike_enqueue]({
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
        path.length === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
      uri = query.length > 0 ? `${uri}?${query}` : uri;
      uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;

      const base = newInstance(URL, location.href);
      return String(newInstance(URL, base.origin + uri));
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

  const areURIsEqual = (a: WindowLocationURI, b: WindowLocationURI) =>
    a.path === b.path && a.query === b.query && a.fragment === b.fragment;

  const areWindowLocationStatesEqual = (
    { uri: a, counter: counterA }: TState,
    { uri: b, counter: counterB }: TState,
  ) =>
    // Intentionally ignore the replace flag.
    (a === b || (a.title === b.title && areURIsEqual(a, b))) &&
    counterA === counterB;

  const createWindowLocationStream = createInstanceFactory(
    mix(
      include(Stream_delegatingMixin(), Delegating_mixin()),
      function WindowLocationStream(
        instance: Pick<
          WindowLocationStreamLike,
          | typeof QueueableLike_enqueue
          | typeof WindowLocationStreamLike_canGoBack
          | typeof WindowLocationStreamLike_goBack
          | typeof WindowLocationStreamLike_replace
          | typeof ObservableLike_observe
        > & {
          [ReplayableLike_buffer]: IndexedBufferCollectionLike<WindowLocationURI>;
        },
        delegate: StreamLike<Updater<TState>, TState> & DisposableLike,
      ): WindowLocationStreamLike & DisposableLike {
        init(Stream_delegatingMixin(), instance, delegate);
        init(
          Delegating_mixin<StreamLike<Updater<TState>, TState>>(),
          instance,
          delegate,
        );

        instance[ReplayableLike_buffer] = pipe(
          instance[DelegatingLike_delegate][ReplayableLike_buffer],
          IndexedBufferCollection_map(location => location.uri),
        );
        return instance;
      },
      props<{
        [ReplayableLike_buffer]: IndexedBufferCollectionLike<WindowLocationURI>;
      }>({
        [ReplayableLike_buffer]: none,
      }),
      {
        get [WindowLocationStreamLike_canGoBack](): ObservableLike<boolean> {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return pipe(
            this[DelegatingLike_delegate],
            Observable.map<TState, boolean>(({ counter }) => counter > 0),
          );
        },

        [QueueableLike_enqueue](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_enqueue](
            (prevState: TState) => {
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
          return this[DelegatingLike_delegate][QueueableLike_enqueue](
            (prevState: TState) => {
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
          history.back();
        },

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          observer: ObserverLike<WindowLocationURI>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            Observable.pick("uri"),
            invoke(ObservableLike_observe, observer),
          );
        },
      },
    ),
  );

  let currentWindowLocationStream: Optional<
    WindowLocationStreamLike & DisposableLike
  > = none;

  const createSyncToHistoryStream = (
    f: typeof history.pushState,
    scheduler: SchedulerLike,
    options: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
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
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly replay?: number;
      readonly capacity?: number;
    },
  ): WindowLocationStreamLike & DisposableLike => {
    if (isSome(currentWindowLocationStream)) {
      raiseWithDebugMessage("Cannot stream more than once");
    }

    const replaceState = createSyncToHistoryStream(
      bindMethod(history, "replaceState"),
      scheduler,
      { backpressureStrategy: "drop-oldest", capacity: 1 },
    );

    const pushState = createSyncToHistoryStream(
      bindMethod(history, "pushState"),
      scheduler,
      { backpressureStrategy: "drop-oldest", capacity: 1 },
    );

    const locationStream = pipe(
      Streamable.createStateStore(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
          // Initialize the counter to -1 so that the initized start value
          // get pushed through the updater.
          counter: -1,
        }),
        { equality: areWindowLocationStatesEqual },
      ),
      invoke(StreamableLike_stream, scheduler, {
        replay: options?.replay ?? 1,
        capacity: options?.capacity ?? 1,
        backpressureStrategy: options?.backpressureStrategy ?? "drop-oldest",
      }),
    );

    const syncState = pipe(
      locationStream,
      Stream.syncState(
        state =>
          // Initialize the history state on page load
          pipe(
            window,
            Element.observeEvent<Window, "popstate", unknown>(
              "popstate",
              (e: PopStateEvent) => {
                const { counter, title } = e.state as {
                  counter: number;
                  title: string;
                };

                const uri = createWindowLocationURIWithPrototype({
                  ...getCurrentWindowLocationURI(),
                  title,
                });

                return { counter, replace: true, uri };
              },
            ),
            Observable.startWith({
              counter: 0,
              replace: true,
              uri: state.uri,
            }),
            Observable.map(returns),
          ),
        (oldState, state) => {
          const locationChanged = !areURIsEqual(state.uri, oldState.uri);
          const titleChanged = oldState.uri.title !== state.uri.title;

          let { replace } = state;
          const push = !replace && locationChanged;
          replace = replace || (titleChanged && !locationChanged);

          return pipe(
            state,
            Observable.fromOptional(),
            Observable.enqueue(state =>
              replace
                ? replaceState[QueueableLike_enqueue](state)
                : push
                ? pushState[QueueableLike_enqueue](state)
                : false,
            ),
            Observable.ignoreElements(),
          );
        },
      ),
    );

    currentWindowLocationStream = pipe(
      locationStream,
      createWindowLocationStream,
      Disposable.add(pushState),
      Disposable.add(replaceState),
      Disposable.add(syncState),
    );

    return currentWindowLocationStream;
  };

  return {
    [StreamableLike_stream]: stream,
  };
})();

export type CSSStyleKey = keyof Omit<
  CSSStyleDeclaration,
  | "item"
  | "length"
  | "parentRule"
  | "getPropertyPriority"
  | "getPropertyValue"
  | "removeProperty"
  | "setProperty"
  | number
  | typeof Symbol.iterator
>;

export interface ScrollState {
  readonly current: number;
  readonly progress: number;
  readonly scrollLength: number;
  readonly velocity: number;
  readonly acceleration: number;
}

export interface ScrollValue {
  readonly x: ScrollState;
  readonly y: ScrollState;
}

export interface Rect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}
