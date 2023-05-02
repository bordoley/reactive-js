import {
  ComponentType,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { unstable_NormalPriority } from "scheduler";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../containers.js";
import {
  Factory,
  Function1,
  Optional,
  SideEffect,
  SideEffect1,
  bindMethod,
  isFunction,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseError,
  returns,
} from "../functions.js";
import { ReadonlyObjectMapLike } from "../keyed-containers.js";
import {
  AnimationConfig,
  EnumerableLike,
  ObservableLike,
  PauseableObservableLike,
  PublisherLike,
  RunnableLike,
} from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Publisher from "../rx/Publisher.js";
import * as Runnable from "../rx/Runnable.js";
import {
  AnimationGroupEventHandlerLike,
  DisposableStreamOf,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DictionaryLike,
  DispatcherLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  KeyedCollectionLike_get,
  PauseableEventMap,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import * as Dictionary from "../util/Dictionary.js";
import * as Disposable from "../util/Disposable.js";
import * as EventPublisher from "../util/EventPublisher.js";
import * as EventSource from "../util/EventSource.js";
import * as Scheduler from "../util/Scheduler.js";
import { getScheduler } from "./scheduler.js";

interface UseEventSource {
  /**
   * @category Hook
   */
  useEventSource<T>(eventSource: EventSourceLike<T>): Optional<T>;

  /**
   * @category Hook
   */
  useEventSource<T>(
    factory: Factory<EventSourceLike<T>>,
    deps: readonly unknown[],
  ): Optional<T>;
}
export const useEventSource: UseEventSource["useEventSource"] = <T>(
  eventSourceOrFactory: EventSourceLike<T> | Factory<EventSourceLike<T>>,
  depsOrNone?: readonly unknown[],
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const eventSource = isFunction(eventSourceOrFactory)
    ? useMemo(eventSourceOrFactory, depsOrNone as readonly unknown[])
    : eventSourceOrFactory;

  useEffect(() => {
    const disposable = pipe(
      eventSource,
      EventSource.addEventHandler(v => updateState(_ => v)),
      Disposable.onError(updateError),
    );

    return bindMethod(disposable, DisposableLike_dispose);
  }, [eventSource, updateState, updateError]);

  return isSome(error) ? raiseError<T>(error) : state;
};

interface UseObservable {
  useObservable<T>(
    observable: ObservableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Optional<T>;

  useObservable<T>(
    factory: Factory<ObservableLike<T>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Optional<T>;
}
/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable - The `ObservableLike` to subscribe to.
 * @param scheduler - An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 *
 * @category Hook
 */
export const useObservable: UseObservable["useObservable"] = <T>(
  observableOrFactory: ObservableLike<T> | Factory<ObservableLike<T>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const observable = isFunction(observableOrFactory)
    ? useMemo(observableOrFactory, optionsOrDeps as readonly unknown[])
    : observableOrFactory;

  const {
    backpressureStrategy,
    capacity,
    priority = unstable_NormalPriority,
  } = (isFunction(observableOrFactory)
    ? optionsOrNone
    : (optionsOrDeps as Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
      }>)) ?? {};

  useEffect(() => {
    const scheduler = getScheduler({ priority });

    const subscription = pipe(
      observable,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler, { backpressureStrategy, capacity }),
      Disposable.onError(updateError),
    );

    return bindMethod(subscription, DisposableLike_dispose);
  }, [observable, updateState, updateError, priority, capacity]);

  return isSome(error) ? raiseError<T>(error) : state;
};

interface UseStream {
  useStream<TStreamable extends StreamableLike>(
    streamable: TStreamable,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<StreamOf<TStreamable>>;

  useStream<TStreamable extends StreamableLike>(
    factory: Factory<TStreamable>,
    dep: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<StreamOf<TStreamable>>;
}

/**
 * @category Hook
 */
export const useStream: UseStream["useStream"] = <
  TStreamable extends StreamableLike,
>(
  streamableOrFactory: TStreamable | Factory<TStreamable>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  },
): Optional<StreamOf<TStreamable>> => {
  const [stream, setStream] = useState<Optional<StreamOf<TStreamable>>>(none);

  const streamable = isFunction(streamableOrFactory)
    ? useMemo(streamableOrFactory, optionsOrDeps as readonly unknown[])
    : streamableOrFactory;

  const {
    backpressureStrategy,
    capacity,
    priority = unstable_NormalPriority,
    replay = 1,
  } = (isFunction(streamableOrFactory)
    ? optionsOrNone
    : (optionsOrDeps as Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly replay?: number;
      }>)) ?? {};

  useEffect(() => {
    const scheduler = getScheduler({ priority });

    const stream: DisposableStreamOf<TStreamable> = streamable[
      StreamableLike_stream
    ](scheduler, {
      replay,
      backpressureStrategy,
      capacity,
    });

    setStream(stream);

    return bindMethod(stream, DisposableLike_dispose);
  }, [streamable, setStream, priority, capacity]);

  return stream;
};

const emptyObservable = /*@__PURE__*/ Observable.empty<unknown>();

interface UseStreamable {
  useStreamable<TReq, T>(
    streamable: StreamableLike<TReq, T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): readonly [Optional<T>, SideEffect1<TReq>];

  useStreamable<TReq, T>(
    factory: Factory<StreamableLike<TReq, T>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): readonly [Optional<T>, SideEffect1<TReq>];
}
/**
 * @category Hook
 */
export const useStreamable: UseStreamable["useStreamable"] = <TReq, T>(
  streamableOrFactory:
    | StreamableLike<TReq, T>
    | Factory<StreamableLike<TReq, T>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  },
): readonly [Optional<T>, SideEffect1<TReq>] => {
  const stream = (useStream as any)(
    streamableOrFactory,
    optionsOrDeps,
    optionsOrNone,
  );

  const dispatcherRef: React.MutableRefObject<Optional<DispatcherLike<TReq>>> =
    useRef();

  useEffect(() => {
    dispatcherRef.current = stream;
  }, [stream, dispatcherRef]);

  const dispatch = useCallback(
    (req: TReq) => {
      const dispatcher = dispatcherRef.current;
      return isSome(dispatcher)
        ? dispatcher[QueueableLike_enqueue](req)
        : false;
    },
    [dispatcherRef],
  );

  const options = (
    isFunction(streamableOrFactory) ? optionsOrNone : optionsOrDeps
  ) as Optional<{
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  }>;
  const value = useObservable<T>(stream ?? emptyObservable, options);
  return [value, dispatch];
};

interface UseFlow {
  useFlow<T>(
    runnable: RunnableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): {
    pause: SideEffect;
    resume: SideEffect;
    value: Optional<T>;
    isPaused: boolean;
  };
  useFlow<T>(
    factory: Factory<RunnableLike<T>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): {
    pause: SideEffect;
    resume: SideEffect;
    value: Optional<T>;
    isPaused: boolean;
  };
}
/**
 * @category Hook
 */
export const useFlow: UseFlow["useFlow"] = <T>(
  runnableOrFactory: RunnableLike<T> | Factory<RunnableLike<T>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly replay?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: Optional<{
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  }>,
): {
  pause: SideEffect;
  resume: SideEffect;
  value: Optional<T>;
  isPaused: boolean;
} => {
  const pauseableObservableStableRef =
    useRef<Optional<PauseableObservableLike<T>>>(none);
  const [pauseableObservable, setPauseableObservable] =
    useState<Optional<PauseableObservableLike<T>>>(none);

  const runnable = isFunction(runnableOrFactory)
    ? useMemo(runnableOrFactory, optionsOrDeps as unknown[])
    : runnableOrFactory;

  const options =
    (isFunction(runnableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly capacity?: number;
        }>)) ?? {};

  const {
    backpressureStrategy,
    capacity,
    priority = unstable_NormalPriority,
  } = options;

  useEffect(() => {
    const scheduler = getScheduler({ priority });
    const pauseableObservable = pipe(
      runnable,
      Runnable.flow(scheduler, options),
    );
    pauseableObservableStableRef.current = pauseableObservable;
    setPauseableObservable(pauseableObservable);

    return bindMethod(pauseableObservable, DisposableLike_dispose);
  }, [
    runnable,
    priority,
    backpressureStrategy,
    capacity,
    setPauseableObservable,
  ]);

  const value = useObservable<T>(
    pauseableObservable ?? emptyObservable,
    options,
  );

  const isPausedObservable = useMemo(
    pipeLazy(
      pauseableObservable ??
        EventSource.empty<PauseableEventMap[keyof PauseableEventMap]>(),
      EventSource.pick("type"),
      EventSource.map(type => type === "paused"),
      EventSource.toObservable(),
    ),
    [pauseableObservable],
  );

  const isPaused = useObservable<boolean>(isPausedObservable, options) ?? true;

  const pause = useCallback(() => {
    pauseableObservableStableRef.current?.[PauseableLike_pause]();
  }, [pauseableObservableStableRef]);

  const resume = useCallback(() => {
    pauseableObservableStableRef.current?.[PauseableLike_resume]();
  }, [pauseableObservableStableRef]);

  return { resume, pause, value, isPaused };
};

const defaultEnumeratorState = {
  current: none,
  hasCurrent: false,
};

interface UseEnumerate {
  useEnumerate<T>(enumerable: EnumerableLike<T>): {
    current: T;
    hasCurrent: boolean;
    move: () => boolean;
  };
  useEnumerate<T>(
    factory: Factory<EnumerableLike<T>>,
    deps: readonly unknown[],
  ): {
    current: T;
    hasCurrent: boolean;
    move: () => boolean;
  };
}

/**
 * @category Hook
 */
export const useEnumerate: UseEnumerate["useEnumerate"] = <T>(
  enumerableOrFactory: EnumerableLike<T> | Factory<EnumerableLike<T>>,
  depsOrNone?: readonly unknown[],
): {
  current: T;
  hasCurrent: boolean;
  move: () => boolean;
} => {
  const enumeratorRef = useRef<Optional<EnumeratorLike<T>>>(none);
  const [{ current, hasCurrent }, setState] = useState<{
    current: Optional<T>;
    hasCurrent: boolean;
  }>(defaultEnumeratorState);

  const enumerable = isFunction(enumerableOrFactory)
    ? useMemo(enumerableOrFactory, depsOrNone)
    : enumerableOrFactory;

  useEffect(() => {
    const enumerator = pipe(enumerable, Enumerable.enumerate());
    enumeratorRef.current = enumerator;

    return bindMethod(enumerator, DisposableLike_dispose);
  }, [enumerable]);

  const move = useCallback(() => {
    const enumerator = enumeratorRef.current;
    const hasCurrent = isSome(enumerator)
      ? enumerator[EnumeratorLike_move]()
      : false;

    const state =
      isSome(enumerator) && hasCurrent
        ? { current: enumerator[EnumeratorLike_current], hasCurrent }
        : defaultEnumeratorState;

    setState(state);

    return hasCurrent;
  }, [enumeratorRef]);

  return {
    current: current as T,
    hasCurrent,
    move,
  };
};

const createReplayPublisher = <TProps>() =>
  Publisher.create<TProps>({ replay: 1 });

export const createComponent = <TProps>(
  fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsPublisher = useMemo<PublisherLike<TProps>>(
      createReplayPublisher,
      [createReplayPublisher],
    );

    useEffect(
      () => propsPublisher[EventListenerLike_notify](props),
      [propsPublisher, props],
    );

    return (
      useObservable(pipeLazy(propsPublisher, fn), [propsPublisher], options) ??
      null
    );
  };

  return ObservableComponent;
};

interface UseAnimationGroup {
  /**
   * @category Hook
   */
  useAnimationGroup<
    T = number,
    TEventType = unknown,
    TKey extends string | number | symbol = string,
  >(
    animationGroupFactory: Factory<
      ReadonlyObjectMapLike<
        TKey,
        Function1<
          TEventType,
          AnimationConfig<T> | readonly AnimationConfig<T>[]
        >
      >
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "switching";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimationGroup<
    T = number,
    TEventType = unknown,
    TKey extends string | number | symbol = string,
  >(
    animationGroupFactory: Factory<
      ReadonlyObjectMapLike<
        TKey,
        Function1<
          TEventType,
          AnimationConfig<T> | readonly AnimationConfig<T>[]
        >
      >
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "blocking";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimationGroup<
    T = number,
    TEventType = unknown,
    TKey extends string | number | symbol = string,
  >(
    animationGroupFactory: Factory<
      ReadonlyObjectMapLike<
        TKey,
        Function1<
          TEventType,
          AnimationConfig<T> | readonly AnimationConfig<T>[]
        >
      >
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "queueing";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimationGroup<
    T = number,
    TEventType = unknown,
    TKey extends string | number | symbol = string,
  >(
    animationGroupFactory: Factory<
      ReadonlyObjectMapLike<
        TKey,
        Function1<
          TEventType,
          AnimationConfig<T> | readonly AnimationConfig<T>[]
        >
      >
    >,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];
}
export const useAnimationGroup: UseAnimationGroup["useAnimationGroup"] = (<
  T = number,
  TEventType = unknown,
  TKey extends string | number | symbol = string,
>(
  animationGroupFactory: Factory<
    ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >
  >,
  deps: readonly unknown[],
  options: {
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): readonly [
  DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>,
  {
    dispatch: SideEffect1<TEventType>;
    pause: SideEffect;
    resume: SideEffect;
  },
  {
    isAnimationRunning: boolean;
    isAnimationPaused: boolean;
  },
] => {
  const animations = useMemo(animationGroupFactory, deps);

  const stream = useStream<AnimationGroupEventHandlerLike<TEventType, T, TKey>>(
    () => {
      const animationGroupEV = Streamable.createAnimationGroupEventHandler(
        animations,
        options as any,
      );

      return {
        [StreamableLike_stream](
          scheduler,
          options,
        ): DisposableStreamOf<
          AnimationGroupEventHandlerLike<TEventType, T, TKey>
        > {
          const animationScheduler =
            Scheduler.createAnimationFrameScheduler(scheduler);
          return animationGroupEV[StreamableLike_stream](
            animationScheduler,
            options,
          );
        },
      };
    },
    [animations, options.mode, options?.priority],
    options,
  );

  const dict: Optional<
    DictionaryLike<TKey, EventSourceLike<{ type: TEventType; value: T }>>
  > = stream;

  const streamRef: React.MutableRefObject<
    Optional<StreamOf<AnimationGroupEventHandlerLike<TEventType, T, TKey>>>
  > = useRef();

  useEffect(() => {
    streamRef.current = stream;
  }, [stream, streamRef]);

  const dispatch = useCallback(
    (req: TEventType) => {
      const dispatcher = streamRef.current;
      return isSome(dispatcher)
        ? dispatcher[QueueableLike_enqueue](req)
        : false;
    },
    [streamRef],
  );

  const pause = useCallback(() => {
    const stream = streamRef.current;
    return isSome(stream) ? stream[PauseableLike_pause]() : false;
  }, [streamRef]);

  const resume = useCallback(() => {
    const stream = streamRef.current;
    return isSome(stream) ? stream[PauseableLike_resume]() : false;
  }, [streamRef]);

  const isAnimationRunning =
    useObservable<boolean>(stream ?? emptyObservable, options) ?? false;

  const isAnimationPausedObservable = useMemo(
    pipeLazy(
      stream ?? EventSource.empty<{ type: unknown }>(),
      EventSource.pick("type"),
      EventSource.keep(type => type === "paused" || type === "resumed"),
      EventSource.map(type => type === "paused"),
      EventSource.toObservable(),
    ),
    [stream],
  );

  const isAnimationPaused =
    useObservable<boolean>(isAnimationPausedObservable, options) ??
    streamRef.current?.[PauseableLike_isPaused] ??
    false;

  const controller = {
    dispatch,
    pause,
    resume,
  };

  const state = {
    isAnimationRunning,
    isAnimationPaused,
  };

  return [dict ?? Dictionary.empty(), controller, state];
}) as UseAnimationGroup["useAnimationGroup"];

interface UseAnimation {
  /**
   * @category Hook
   */
  useAnimation<T = number, TEventType = unknown>(
    animationFactory: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "switching";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    EventSourceLike<{ type: TEventType; value: T }>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEventType = unknown>(
    animationFactory: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "blocking";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    EventSourceLike<{ type: TEventType; value: T }>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEventType = unknown>(
    animationFactory: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "queueing";
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    EventSourceLike<{ type: TEventType; value: T }>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEventType = unknown>(
    animationFactory: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    EventSourceLike<{ type: TEventType; value: T }>,
    {
      dispatch: SideEffect1<TEventType>;
      pause: SideEffect;
      resume: SideEffect;
    },
    {
      isAnimationRunning: boolean;
      isAnimationPaused: boolean;
    },
  ];
}
export const useAnimation: UseAnimation["useAnimation"] = (<
  T = unknown,
  TEventType = number,
>(
  animationFactory: Function1<
    TEventType,
    AnimationConfig<T> | readonly AnimationConfig<T>[]
  >,
  deps: readonly unknown[],
  options: {
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): readonly [
  EventSourceLike<{ type: TEventType; value: T }>,
  {
    dispatch: SideEffect1<TEventType>;
    pause: SideEffect;
    resume: SideEffect;
  },
  {
    isAnimationRunning: boolean;
    isAnimationPaused: boolean;
  },
] => {
  const [animatedValues, animationController, state] = useAnimationGroup<
    T,
    TEventType
  >(
    returns({
      v: animationFactory,
    }),
    deps,
    options,
  );

  return [
    animatedValues[KeyedCollectionLike_get]("v") ?? EventSource.empty(),
    animationController,
    state,
  ];
}) as UseAnimation["useAnimation"];

/**
 * @category Hook
 */
export const useEventPublisher = <T>({
  replay,
}: { replay?: number } = {}): EventPublisherLike<T> => {
  const [publisher, setPublisher] = useState<EventPublisherLike<T>>(
    EventPublisher.disposed(),
  );

  useEffect(() => {
    const publisher = EventPublisher.create<T>({ replay });
    setPublisher(publisher);

    return bindMethod(publisher, DisposableLike_dispose);
  }, [replay, setPublisher]);

  return publisher;
};
