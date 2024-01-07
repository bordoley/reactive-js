import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { pick } from "../../computations.js";
import {
  DeferredObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SchedulerLike,
  StreamLike,
  StreamableLike_stream,
} from "../../concurrent.js";
import * as Observable from "../../concurrent/Observable.js";
import * as Streamable from "../../concurrent/Streamable.js";
import { StoreLike_value, WritableStoreLike } from "../../events.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStore from "../../events/WritableStore.js";
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
  raiseIf,
  returns,
} from "../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
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
  subscribe(scheduler: SchedulerLike): WindowLocationLike & DisposableLike;
}

type Signature = WebWindowLocationModule;

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

export const subscribe: Signature["subscribe"] = /*@__PURE__*/ (() => {
  const WindowLocation_delegate = Symbol("WindowLocation_delegate");

  type TProperties = {
    [WindowLocation_delegate]: StreamLike<Updater<TState>, TState> &
      DisposableLike;
    [WindowLocationLike_canGoBack]: WritableStoreLike<boolean>;
  };

  const createWindowLocationObservable = createInstanceFactory(
    mix(
      include(DelegatingDisposableMixin()),
      function WindowLocationStream(
        instance: WindowLocationLike & TProperties,
        delegate: StreamLike<Updater<TState>, TState> & DisposableLike,
        scheduler: SchedulerLike,
      ): WindowLocationLike & DisposableLike {
        init(DelegatingDisposableMixin(), instance, delegate);

        instance[WindowLocation_delegate] = delegate;

        instance[WindowLocationLike_canGoBack] = pipe(
          WritableStore.create(false),
          Disposable.addTo(instance),
        );

        pipe(
          delegate,
          Observable.forEach<TState>(({ counter }) => {
            instance[WindowLocationLike_canGoBack][StoreLike_value] =
              counter > 0;
          }),
          Observable.subscribe(scheduler),
          Disposable.addTo(instance),
        );

        return instance;
      },
      props<TProperties>({
        [WindowLocation_delegate]: none,
        [WindowLocationLike_canGoBack]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isMulticasted]: true as const,
        [ObservableLike_isRunnable]: false as const,
        [ObservableLike_isPure]: true as const,

        [WindowLocationLike_push](
          this: TProperties,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ) {
          this[WindowLocation_delegate][QueueableLike_enqueue](
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
          this: TProperties,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ) {
          this[WindowLocation_delegate][QueueableLike_enqueue](
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
          this: TProperties,
          observer: ObserverLike<WindowLocationURI>,
        ): void {
          pipe(
            this[WindowLocation_delegate],
            pick<Observable.MulticastObservableComputation, TState, "uri">(
              { map: Observable.map },
              "uri",
            ),
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
    raiseIf(
      isSome(currentWindowLocationObservable),
      "Cannot stream more than once",
    );

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
      Streamable.syncState(
        state =>
          // Initialize the history state on page load
          pipe(
            window,
            Element.eventSource<Window, "popstate">("popstate"),
            EventSource.map((e: PopStateEvent) => {
              const { counter, title } = e.state as {
                counter: number;
                title: string;
              };

              const uri = createWindowLocationURIWithPrototype({
                ...getCurrentWindowLocationURI(),
                title,
              });

              return { counter, replace: true, uri };
            }),
            Observable.fromEventSource(),
            Observable.mergeWith(
              pipe(
                {
                  counter: 0,
                  replace: true,
                  uri: state.uri,
                },
                Observable.fromValue(),
              ),
            ),
            Observable.map<TState, Updater<TState>>(returns),
          ),

        (oldState, state) => {
          const locationChanged = !areURIsEqual(state.uri, oldState.uri);
          const titleChanged = oldState.uri.title !== state.uri.title;

          let { replace } = state;
          const push = !replace && locationChanged;
          replace = replace || (titleChanged && !locationChanged);

          return pipe(
            state,
            Observable.fromValue(),
            replace
              ? Observable.enqueue(replaceState)
              : push
              ? Observable.enqueue(pushState)
              : identity<DeferredObservableLike>,
            Observable.ignoreElements(),
          );
        },
      ),
      invoke(StreamableLike_stream, scheduler, {
        replay: 1,
        capacity: 1,
        backpressureStrategy: "drop-oldest",
      }),
    );

    currentWindowLocationObservable = pipe(
      createWindowLocationObservable(locationStream, scheduler),
      Disposable.add(pushState),
      Disposable.add(replaceState),
    );

    return currentWindowLocationObservable;
  };
})();
