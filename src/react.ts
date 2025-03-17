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
  BroadcasterLike,
  EventSourceLike,
  ObservableLike,
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
  EventListenerLike_notify,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SinkLike,
  SinkLike_complete,
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
      ): ObservableLike<Readonly<Record<string, Optional<T>>>>;
      store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
    };
    readonly children: React.ReactNode;
  }): React.ReactNode;

  createComponent<TProps>(
    fn: Function1<BroadcasterLike<TProps>, ObservableLike<ReactElement>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
    },
  ): Function1<TProps, React.ReactNode>;

  useSink<TReq>(sink: Optional<SinkLike<TReq>>): {
    notify: Function1<TReq, boolean>;
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
  useListen<T>(eventSource: Optional<EventSourceLike<T>>): Optional<T>;
  useListen<T>(
    factory: Factory<Optional<EventSourceLike<T> & DisposableLike>>,
    deps: readonly unknown[],
  ): Optional<T>;

  /**
   */
  useObserve<T>(
    observable: Optional<ObservableLike<T>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
    },
  ): Optional<T>;
  useObserve<T>(
    factory: Factory<Optional<ObservableLike<T>>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
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
    factory: Factory<Optional<StoreLike> & DisposableLike>,
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
  fn: Function1<BroadcasterLike<TProps>, ObservableLike<ReactElement>>,
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

export const useSink: Signature["useSink"] = <TReq>(
  sink: Optional<SinkLike<TReq>>,
) => {
  const stableSinkRef = useRef<Optional<SinkLike<TReq>>>(none);

  useEffect(() => {
    stableSinkRef.current = sink;
  }, [sink]);

  const notify = useCallback(
    (req: TReq) =>
      stableSinkRef?.current?.[EventListenerLike_notify](req) ?? true,
    [stableSinkRef],
  );

  const complete = useCallback(
    () => stableSinkRef?.current?.[SinkLike_complete](),
    [stableSinkRef],
  );

  return useMemo(() => ({ notify, complete }), [notify, complete]);
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
    | Factory<Optional<EventSourceLike<T> & DisposableLike>>,
  depsOrNone?: readonly unknown[],
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const eventSource = isFunction(eventSourceOrFactory)
    ? useDisposable(eventSourceOrFactory, depsOrNone as readonly unknown[])
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
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
  },
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const observable = isFunction(observableOrFactory)
    ? useMemo(observableOrFactory, optionsOrDeps as readonly unknown[])
    : observableOrFactory;

  const { priority } =
    (isFunction(observableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
        }>)) ?? {};

  useDisposable(
    pipeSomeLazy(
      observable,
      Observable.forEach((v: T) => updateState(_ => v)),
      Observable.subscribe(ReactScheduler.get(priority)),
      DisposableContainer.onError(updateError),
    ),
    [observable, updateState, updateError, priority],
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

  return useMemo(
    () => ({
      isPaused,
      pause,
      resume,
    }),
    [isPaused, pause, resume],
  );
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
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly replay?: number;
  },
) => {
  const streamable = isFunction(streamableOrFactory)
    ? useMemo(streamableOrFactory, optionsOrDeps as readonly unknown[])
    : streamableOrFactory;

  const { replay = 1 } =
    (isFunction(streamableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
          readonly replay?: number;
        }>)) ?? {};

  const stream = useDisposable(
    () =>
      streamable[StreamableLike_stream]({
        replay,
      }),
    [streamable, replay],
  );

  return stream;
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
    ): ObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
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
