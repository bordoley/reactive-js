import * as Obj from "../__internal__/Object.js";
import { Array_length, String } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Computation from "../computations/Computation.js";
import * as Observable from "../computations/Observable.js";
import * as Streamable from "../computations/Streamable.js";
import { StateStoreStreamLike } from "../computations/Streamable.js";
import * as WritableStore from "../computations/WritableStore.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike_subscribe,
  ObservableLike,
  StoreLike_value,
  StreamableLike_stream,
  WritableStoreLike,
} from "../computations.js";
import {
  Optional,
  Updater,
  alwaysFalse,
  bindMethod,
  compose,
  identity,
  invoke,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
} from "../functions.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  SchedulerLike,
} from "../utils.js";
import {
  WindowLocationLike,
  WindowLocationLike_canGoBack,
  WindowLocationLike_goBack,
  WindowLocationLike_push,
  WindowLocationLike_replace,
  WindowLocationURI,
} from "../web.js";
import * as Element from "./Element.js";

interface WebWindowLocationModule {
  get(): WindowLocationLike & DisposableLike;
}

interface SerializableWindowLocationURI extends WindowLocationURI {
  toString(): string;
}

type Signature = WebWindowLocationModule;

const { history, location } = window;

const ObservableModule = Computation.makeModule<
  Observable.Signature,
  "forEach" | "genPure" | "keep" | "map" | "merge"
>({
  forEach: Observable.forEach,
  genPure: Observable.genPure,
  keep: Observable.keep,
  map: Observable.map,
  merge: Observable.merge,
});

const serializableWindowLocationPrototype = {
  toString(this: WindowLocationURI) {
    const { path, query, fragment } = this;
    let uri =
      path[Array_length] === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
    uri = query[Array_length] > 0 ? `${uri}?${query}` : uri;
    uri = fragment[Array_length] > 0 ? `${uri}#${fragment}` : uri;

    const base = newInstance(URL, location.href);
    return String(newInstance(URL, base.origin + uri));
  },
};

const createSerializableWindowLocationURI = (
  uri: WindowLocationURI,
): SerializableWindowLocationURI =>
  uri.toString === serializableWindowLocationPrototype.toString
    ? uri
    : Obj.create(
        serializableWindowLocationPrototype,
        Obj.getOwnPropertyDescriptors(uri),
      );

const getCurrentWindowLocationURI = (): WindowLocationURI => {
  const {
    pathname: path,
    search: query,
    hash: fragment,
  } = newInstance(URL, location.href);

  return createSerializableWindowLocationURI({
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
) =>
  Streamable.create<TState, TState & { uri: SerializableWindowLocationURI }>(
    compose(
      Observable.throttle(100),
      Observable.forEach<TState>(({ counter, uri }) => {
        const serializableURI = createSerializableWindowLocationURI(uri);
        const { title } = serializableURI;
        document.title = title;
        f({ title, counter }, "", String(serializableURI));
      }),
    ),
  )[StreamableLike_stream](scheduler);

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const WindowLocation_delegate = Symbol("WindowLocation_delegate");

  type TProperties = {
    [WindowLocation_delegate]: StateStoreStreamLike<Updater<TState>, TState> &
      DisposableLike;
    [WindowLocationLike_canGoBack]: WritableStoreLike<boolean>;
  };

  const createWindowLocation = mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function WindowLocationStream(
      this: Omit<WindowLocationLike, keyof DisposableContainerLike> &
        TProperties,
      delegate: StateStoreStreamLike<Updater<TState>, TState>,
    ): WindowLocationLike & DisposableLike {
      init(DelegatingDisposableMixin, this, delegate);

      this[WindowLocation_delegate] = delegate;

      this[WindowLocationLike_canGoBack] = pipe(
        WritableStore.create(false),
        Disposable.addTo(this),
      );

      pipe(
        delegate,
        Broadcaster.addEventHandler(({ counter }: TState) => {
          this[WindowLocationLike_canGoBack][StoreLike_value] = counter > 0;
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [WindowLocation_delegate]: none,
      [WindowLocationLike_canGoBack]: none,
    }),
    proto({
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,
      [ComputationLike_isPure]: true as const,

      get [StoreLike_value]() {
        unsafeCast<TProperties>(this);
        const state = this[WindowLocation_delegate][StoreLike_value];
        return state.uri;
      },

      [WindowLocationLike_push](
        this: TProperties,
        stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
      ) {
        this[WindowLocation_delegate][EventListenerLike_notify](
          (prevState: TState) => {
            const uri = createSerializableWindowLocationURI(
              isFunction(stateOrUpdater)
                ? stateOrUpdater(prevState.uri)
                : stateOrUpdater,
            );

            return { uri, replace: false, counter: prevState.counter + 1 };
          },
        );
      },

      [WindowLocationLike_replace](
        this: TProperties,
        stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
      ) {
        this[WindowLocation_delegate][EventListenerLike_notify](
          (prevState: TState) => {
            const uri = createSerializableWindowLocationURI(
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

      [EventSourceLike_subscribe](
        this: TProperties,
        eventListener: EventListenerLike<WindowLocationURI>,
      ): void {
        pipe(
          this[WindowLocation_delegate],
          Broadcaster.map((x: TState) => x.uri),
          invoke(EventSourceLike_subscribe, eventListener),
        );
      },
    }),
  );

  let currentWindowLocation: Optional<WindowLocationLike & DisposableLike> =
    none;

  return (): WindowLocationLike & DisposableLike => {
    if (isSome(currentWindowLocation)) {
      return currentWindowLocation;
    }

    const scheduler = DefaultScheduler.get();

    const replaceState = createSyncToHistoryStream(
      bindMethod(history, "replaceState"),
      scheduler,
    );

    const pushState = createSyncToHistoryStream(
      bindMethod(history, "pushState"),
      scheduler,
    );

    const locationStream = pipe(
      Streamable.stateStore(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
          // Initialize the counter to -1 so that the initized start value
          // get pushed through the updater.
          counter: -1,
        }),
        { equality: areWindowLocationStatesEqual },
      ),
      Streamable.syncState(
        state =>
          // Initialize the history state on page load
          pipe(
            window,
            Element.eventSource<Window, "popstate">("popstate"),
            Broadcaster.map((e: PopStateEvent): TState => {
              const { counter, title } = e.state as {
                counter: number;
                title: string;
              };

              const uri = createSerializableWindowLocationURI({
                ...getCurrentWindowLocationURI(),
                title,
              });

              return { counter, replace: true, uri };
            }),
            Observable.fromBroadcaster(),
            Computation.mergeWith<Observable.Computation, TState>(
              ObservableModule,
              Computation.ofValues(ObservableModule, {
                counter: 0,
                replace: true,
                uri: state.uri,
              }),
            ),
            Observable.map(returns<TState>),
          ),

        (oldState, state) => {
          const locationChanged = !areURIsEqual(state.uri, oldState.uri);
          const titleChanged = oldState.uri.title !== state.uri.title;

          let { replace } = state;
          const push = !replace && locationChanged;
          replace = replace || (titleChanged && !locationChanged);

          return pipe(
            Computation.ofValues(ObservableModule, state),
            replace
              ? Observable.forEach(
                  bindMethod(replaceState, EventListenerLike_notify),
                )
              : push
                ? Observable.forEach(
                    bindMethod(pushState, EventListenerLike_notify),
                  )
                : identity<ObservableLike>,
            Observable.keep(alwaysFalse),
          );
        },
      ),
      invoke(StreamableLike_stream, scheduler),
    );

    currentWindowLocation = pipe(
      createWindowLocation(locationStream),
      Disposable.add(pushState),
      Disposable.add(replaceState),
    );

    scheduler[DisposableContainerLike_add](currentWindowLocation);

    return currentWindowLocation;
  };
})();
