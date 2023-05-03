import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/util.js";
import {
  Optional,
  Updater,
  bindMethod,
  compose,
  identity,
  invoke,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../functions.js";
import {
  MulticastObservableLike_buffer,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  StreamLike,
  StreamableLike_stream,
} from "../../rx.js";
import * as Observable from "../../rx/Observable.js";
import * as Stream from "../../rx/Stream.js";
import Stream_delegatingMixin from "../../rx/Stream/__internal__/Stream.delegatingMixin.js";
import * as Streamable from "../../rx/Streamable.js";
import {
  DisposableLike,
  IndexedBufferCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
} from "../../util.js";
import Delegating_mixin from "../../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../../util/Disposable.js";
import IndexedBufferCollection_map from "../../util/IndexedBufferCollection/__internal__/IndexedBufferCollection.map.js";
import {
  WindowLocationLike,
  WindowLocationLike_canGoBack,
  WindowLocationLike_goBack,
  WindowLocationLike_push,
  WindowLocationLike_replace,
  WindowLocationURI,
} from "../web.js";
import * as Element from "./Element.js";

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

export const subscribe: (
  scheduler: SchedulerLike,
) => WindowLocationLike & DisposableLike = /*@__PURE__*/ (() => {
  const createWindowLocationObservable = createInstanceFactory(
    mix(
      include(Stream_delegatingMixin(), Delegating_mixin()),
      function WindowLocationStream(
        instance: Pick<
          WindowLocationLike,
          | typeof WindowLocationLike_canGoBack
          | typeof WindowLocationLike_goBack
          | typeof WindowLocationLike_push
          | typeof WindowLocationLike_replace
          | typeof ObservableLike_observe
        > & {
          [MulticastObservableLike_buffer]: IndexedBufferCollectionLike<WindowLocationURI>;
        },
        delegate: StreamLike<Updater<TState>, TState> & DisposableLike,
      ): WindowLocationLike & DisposableLike {
        init(Stream_delegatingMixin(), instance, delegate);
        init(
          Delegating_mixin<StreamLike<Updater<TState>, TState>>(),
          instance,
          delegate,
        );

        instance[MulticastObservableLike_buffer] = pipe(
          instance[DelegatingLike_delegate][MulticastObservableLike_buffer],
          IndexedBufferCollection_map(location => location.uri),
        );
        return instance;
      },
      props<{
        [MulticastObservableLike_buffer]: IndexedBufferCollectionLike<WindowLocationURI>;
      }>({
        [MulticastObservableLike_buffer]: none,
      }),
      {
        get [WindowLocationLike_canGoBack](): ObservableLike<boolean> {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return pipe(
            this[DelegatingLike_delegate],
            Observable.map<TState, boolean>(({ counter }) => counter > 0),
          );
        },

        [WindowLocationLike_push](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ) {
          this[DelegatingLike_delegate][QueueableLike_enqueue](
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

        [WindowLocationLike_replace](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ) {
          this[DelegatingLike_delegate][QueueableLike_enqueue](
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

        [WindowLocationLike_goBack](this: WindowLocationLike): void {
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

  let currentWindowLocationObservable: Optional<
    WindowLocationLike & DisposableLike
  > = none;

  return (scheduler: SchedulerLike): WindowLocationLike & DisposableLike => {
    if (isSome(currentWindowLocationObservable)) {
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
        replay: 1,
        capacity: 1,
        backpressureStrategy: "drop-oldest",
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
            replace
              ? Observable.enqueue(replaceState)
              : push
              ? Observable.enqueue(pushState)
              : identity,
            Observable.ignoreElements(),
          );
        },
      ),
    );

    currentWindowLocationObservable = pipe(
      locationStream,
      createWindowLocationObservable,
      Disposable.add(pushState),
      Disposable.add(replaceState),
      Disposable.add(syncState),
    );

    return currentWindowLocationObservable;
  };
})();
