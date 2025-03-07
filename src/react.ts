import {
  ReactElement,
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { nullObject } from "./__internal__/constants.js";
import * as Cache from "./computations/Cache.js";
import * as EventSource from "./computations/EventSource.js";
import * as Observable from "./computations/Observable.js";
import * as Subject from "./computations/Subject.js";
import {
  DeferredObservableLike,
  DispatcherLike,
  DispatcherLike_complete,
  EventListenerLike_notify,
  EventSourceLike,
  FlowableLike,
  FlowableLike_flow,
  MulticastObservableLike,
  ObservableLike,
  PauseableObservableLike,
  StoreLike,
  StoreLike_value,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "./computations.js";
import {
  Factory,
  Function1,
  Optional,
  SideEffect,
  bindMethod,
  isFunction,
  isNone,
  isSome,
  none,
  pipe,
  pipeSomeLazy,
  raiseError,
} from "./functions.js";
import * as ReactScheduler from "./react/Scheduler.js";
import * as DisposableContainer from "./utils/DisposableContainer.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike_enqueue,
} from "./utils.js";

interface ReactModule {
  CacheProvider<T>(props: {
    readonly cacheContext: React.Context<Optional<Cache.CacheLike<T>>>;
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly cleanupPriority?: 1 | 2 | 3 | 4 | 5;
    readonly maxEntries?: number;
    readonly persistentStore?: {
      load(
        keys: ReadonlySet<string>,
      ): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
      store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
    };
    readonly children: React.ReactNode;
  }): React.ReactNode;

  createComponent<TProps>(
    fn: Function1<
      MulticastObservableLike<TProps>,
      ObservableLike<ReactElement>
    >,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<TProps, React.ReactNode>;

  useDispatcher<TReq>(dispatcher: Optional<DispatcherLike<TReq>>): {
    enqueue: Function1<TReq, boolean>;
    complete: SideEffect;
  };

  /**
   */
  useDisposable<TDisposable extends DisposableLike>(
    factory: () => Optional<TDisposable>,
    deps: readonly unknown[],
  ): Optional<TDisposable>;

  /**
   */
  useFlow<T>(
    flowable: FlowableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<PauseableObservableLike<T>>;
  useFlow<T>(
    factory: Factory<FlowableLike<T>>,
    dep: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<PauseableObservableLike<T>>;

  /**
   */
  useListen<T>(eventSource: Optional<EventSourceLike<T>>): Optional<T>;
  useListen<T>(
    factory: Factory<Optional<EventSourceLike<T>>>,
    deps: readonly unknown[],
  ): Optional<T>;

  /**
   */
  useObserve<T>(
    observable: Optional<ObservableLike<T>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Optional<T>;
  useObserve<T>(
    factory: Factory<Optional<ObservableLike<T>>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Optional<T>;

  /**
   */
  usePauseable(pauseable: Optional<PauseableLike>): {
    isPaused: boolean;
    pause: SideEffect;
    resume: SideEffect;
  };

  useStore<T>(store: Optional<StoreLike<T>>): Optional<T>;
  useStore<T>(
    factory: Factory<Optional<StoreLike>>,
    deps: readonly unknown[],
  ): Optional<T>;

  /**
   */
  useStream<TStreamable extends StreamableLike>(
    streamable: TStreamable,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<StreamOf<TStreamable>>;
  useStream<TStreamable extends StreamableLike>(
    factory: Factory<TStreamable>,
    dep: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<StreamOf<TStreamable>>;
}

type Signature = ReactModule;

export const createComponent: Signature["createComponent"] = <TProps>(
  fn: Function1<MulticastObservableLike<TProps>, ObservableLike<ReactElement>>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  } = {},
) => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useDisposable(
      () => Subject.create<TProps>({ replay: 1 }),
      [],
    );

    useEffect(() => {
      propsSubject?.[EventListenerLike_notify](props);
    }, [propsSubject, props]);

    return (
      useObserve(pipeSomeLazy(propsSubject, fn), [propsSubject], options) ??
      nullObject
    );
  };

  return ObservableComponent;
};

export const useDispatcher: Signature["useDispatcher"] = <TReq>(
  dispatcher: Optional<DispatcherLike<TReq>>,
) => {
  const stableDispatcherRef = useRef<Optional<DispatcherLike<TReq>>>(none);

  useEffect(() => {
    stableDispatcherRef.current = dispatcher;
  }, [dispatcher]);

  const enqueue = useCallback(
    (req: TReq) =>
      stableDispatcherRef?.current?.[QueueableLike_enqueue](req) ?? true,
    [stableDispatcherRef],
  );

  const complete = useCallback(
    () => stableDispatcherRef?.current?.[DispatcherLike_complete](),
    [stableDispatcherRef],
  );

  return { enqueue, complete };
};

export const useDisposable: Signature["useDisposable"] = <
  TDisposable extends DisposableLike,
>(
  factory: () => Optional<TDisposable>,
  deps: readonly unknown[],
) => {
  const [disposable, setDisposable] = useState<Optional<TDisposable>>(none);
  const [error, setError] = useState<Optional<Error>>(none);

  useEffect(() => {
    const disposable = factory();

    if (isNone(disposable)) {
      return;
    }

    pipe(disposable, DisposableContainer.onError(setError));

    setDisposable(disposable);
    return bindMethod(disposable, DisposableLike_dispose);
  }, [...deps, setDisposable]);

  return isSome(error) ? raiseError(error) : disposable;
};

export const useListen: Signature["useListen"] = <T>(
  eventSourceOrFactory:
    | Optional<EventSourceLike<T>>
    | Factory<Optional<EventSourceLike<T>>>,
  depsOrNone?: readonly unknown[],
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const eventSource = isFunction(eventSourceOrFactory)
    ? useMemo(eventSourceOrFactory, depsOrNone as readonly unknown[])
    : eventSourceOrFactory;

  useDisposable(
    pipeSomeLazy(
      eventSource,
      EventSource.addEventHandler(v => updateState(_ => v)),
      DisposableContainer.onError(updateError),
    ),
    [eventSource, updateState, updateError],
  );

  return isSome(error) ? raiseError<T>(error) : state;
};

export const useObserve: Signature["useObserve"] = <T>(
  observableOrFactory:
    | Optional<ObservableLike<T>>
    | Factory<Optional<ObservableLike<T>>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const observable = isFunction(observableOrFactory)
    ? useMemo(observableOrFactory, optionsOrDeps as readonly unknown[])
    : observableOrFactory;

  const { backpressureStrategy, capacity, priority } =
    (isFunction(observableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        }>)) ?? {};

  useDisposable(
    pipeSomeLazy(
      observable,
      Observable.forEach((v: T) => updateState(_ => v)),
      Observable.subscribe(ReactScheduler.get(priority), {
        backpressureStrategy,
        capacity,
      }),
      DisposableContainer.onError(updateError),
    ),
    [
      observable,
      updateState,
      updateError,
      priority,
      backpressureStrategy,
      capacity,
    ],
  );

  return isSome(error) ? raiseError<T>(error) : state;
};

export const usePauseable: Signature["usePauseable"] = (
  pauseable: Optional<PauseableLike>,
) => {
  const stablePauseableRef = useRef<Optional<PauseableLike>>(none);

  useEffect(() => {
    stablePauseableRef.current = pauseable;
  }, [pauseable]);

  const pause = useCallback(
    () => stablePauseableRef?.current?.[PauseableLike_pause](),
    [stablePauseableRef],
  );

  const resume = useCallback(
    () => stablePauseableRef?.current?.[PauseableLike_resume](),
    [stablePauseableRef],
  );

  const isPaused =
    useListen(pauseable?.[PauseableLike_isPaused]) ??
    pauseable?.[PauseableLike_isPaused][StoreLike_value] ??
    true;

  return {
    isPaused,
    pause,
    resume,
  };
};

export const useStore: Signature["useStore"] = <T>(
  storeOrFactory: Optional<StoreLike<T>> | Factory<Optional<StoreLike<T>>>,
  depsOrNone?: readonly unknown[],
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const store = isFunction(storeOrFactory)
    ? useMemo(storeOrFactory, depsOrNone as readonly unknown[])
    : storeOrFactory;

  useEffect(() => {
    updateState(_ => store?.[StoreLike_value]);
  }, [store, updateState]);

  useDisposable(
    pipeSomeLazy(
      store,
      EventSource.addEventHandler(v => updateState(_ => v)),
      DisposableContainer.onError(updateError),
    ),
    [store, updateState, updateError],
  );

  return isSome(error) ? raiseError<T>(error) : state;
};

export const useStream: Signature["useStream"] = <
  TStreamable extends StreamableLike,
>(
  streamableOrFactory: TStreamable | Factory<TStreamable>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly replay?: number;
  },
) => {
  const streamable = isFunction(streamableOrFactory)
    ? useMemo(streamableOrFactory, optionsOrDeps as readonly unknown[])
    : streamableOrFactory;

  const {
    backpressureStrategy,
    capacity,
    priority,
    replay = 1,
  } = (isFunction(streamableOrFactory)
    ? optionsOrNone
    : (optionsOrDeps as Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
      }>)) ?? {};

  const stream = useDisposable(
    () =>
      streamable[StreamableLike_stream](ReactScheduler.get(priority), {
        replay,
        backpressureStrategy,
        capacity,
      }),
    [streamable, priority, replay, backpressureStrategy, capacity],
  );

  return stream;
};

export const useFlow: Signature["useFlow"] = <T>(
  flowableOrFactory: FlowableLike<T> | Factory<FlowableLike<T>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly replay?: number;
  },
) => {
  const flowable = isFunction(flowableOrFactory)
    ? useMemo(flowableOrFactory, optionsOrDeps as readonly unknown[])
    : flowableOrFactory;

  const {
    backpressureStrategy,
    capacity,
    priority,
    replay = 1,
  } = (isFunction(flowableOrFactory)
    ? optionsOrNone
    : (optionsOrDeps as Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
      }>)) ?? {};

  const pauseable = useDisposable(
    () =>
      flowable[FlowableLike_flow](ReactScheduler.get(priority), {
        replay,
        backpressureStrategy,
        capacity,
      }),
    [flowable, priority, replay, backpressureStrategy, capacity],
  );

  return pauseable;
};

export const CacheProvider: Signature["CacheProvider"] = <T>(props: {
  readonly cacheContext: React.Context<Optional<Cache.CacheLike<T>>>;
  readonly priority?: 1 | 2 | 3 | 4 | 5;
  readonly backpressureStrategy?: BackpressureStrategy;
  readonly capacity?: number;
  readonly cleanupPriority?: 1 | 2 | 3 | 4 | 5;
  readonly maxEntries?: number;
  readonly persistentStore?: {
    load(
      keys: ReadonlySet<string>,
    ): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
  };
  children: React.ReactNode;
}) => {
  const {
    cacheContext,
    priority,
    backpressureStrategy,
    capacity,
    cleanupPriority,
    maxEntries,
    persistentStore,
    children,
  } = props ?? {};
  const cache = useDisposable(
    () =>
      Cache.create(ReactScheduler.get(priority), {
        backpressureStrategy,
        capacity,
        cleanupScheduler: ReactScheduler.get(cleanupPriority ?? 4),
        maxEntries,
        persistentStore,
      }),
    [
      priority,
      backpressureStrategy,
      capacity,
      cleanupPriority,
      maxEntries,
      persistentStore,
    ],
  );

  return createElement(
    cacheContext.Provider,
    {
      value: cache,
    },
    children,
  );
};
