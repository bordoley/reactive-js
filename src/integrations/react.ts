import {
  ComponentType,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  unstable_NormalPriority,
  unstable_cancelCallback,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
} from "scheduler";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../containers.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  SideEffect,
  Updater,
  bindMethod,
  identity,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseError,
} from "../functions.js";
import {
  AnimationConfig,
  DispatcherLike,
  EnumerableLike,
  ObservableLike,
  PublisherLike,
} from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Publisher from "../rx/Publisher.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_now,
} from "../scheduling.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import * as Scheduler from "../scheduling/Scheduler.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationLike_priority,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import {
  FlowableLike,
  FlowableStreamLike_isPaused,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";
import * as EventPublisher from "../util/EventPublisher.js";

const createSchedulerWithPriority = /*@__PURE__*/ (() => {
  type TProperties = unknown;

  const createPriorityScheduler = createInstanceFactory(
    mix(
      include(PriorityScheduler_mixin),
      function ReactPriorityScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
        >,
      ): PrioritySchedulerLike {
        init(PriorityScheduler_mixin, instance, 300);
        return instance;
      },
      props<TProperties>({}),
      {
        get [SchedulerLike_now](): number {
          return unstable_now();
        },

        get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
          return unstable_shouldYield();
        },

        [ContinuationSchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const priority = continuation[ContinuationLike_priority];

          pipe(this, Disposable.addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          const callback = () => {
            callbackNodeDisposable[DisposableLike_dispose]();
            this[PrioritySchedulerImplementationLike_runContinuation](
              continuation,
            );
          };

          const callbackNode = unstable_scheduleCallback(
            priority,
            callback,
            delay > 0 ? { delay } : none,
          );

          const callbackNodeDisposable = pipe(
            Disposable.create(),
            Disposable.onDisposed(
              pipeLazy(callbackNode, unstable_cancelCallback),
            ),
            Disposable.addTo(continuation),
          );
        },
      },
    ),
  );

  return (priority: number): SchedulerLike =>
    pipe(createPriorityScheduler(), PriorityScheduler.toScheduler(priority));
})();

const createAnimationFrameSchedulerFactory = (priority?: number) => {
  const hostScheduler = createSchedulerWithPriority(
    priority ?? unstable_NormalPriority,
  );
  return pipe(
    Scheduler.createAnimationFrameScheduler(hostScheduler),
    Disposable.add(hostScheduler),
  );
};

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable - The `ObservableLike` to subscribe to.
 * @param scheduler - An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 *
 * @category Hook
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const {
    backpressureStrategy,
    capacity,
    priority = unstable_NormalPriority,
  } = options;

  useEffect(() => {
    const scheduler = createSchedulerWithPriority(priority);

    pipe(
      observable,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler, { backpressureStrategy, capacity }),
      Disposable.onError(updateError),
    );

    return bindMethod(scheduler, DisposableLike_dispose);
  }, [observable, updateState, updateError, priority, capacity]);

  return isSome(error) ? raiseError<T>(error) : state;
};

/**
 * @category Hook
 */
export const useStream = <
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
>(
  streamable: StreamableLike<TReq, T, TStream>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  } = {},
): Optional<TStream> => {
  const [stream, setStream] = useState<Optional<TStream>>(none);

  const {
    backpressureStrategy,
    capacity,
    priority = unstable_NormalPriority,
    replay = 1,
  } = options;

  useEffect(() => {
    const scheduler = createSchedulerWithPriority(priority);

    const stream: TStream = streamable[StreamableLike_stream](scheduler, {
      replay,
      backpressureStrategy,
      capacity,
    });

    setStream(stream);

    return bindMethod(scheduler, DisposableLike_dispose);
  }, [streamable, setStream, priority, capacity]);

  return stream;
};

const useDispatcher = <TReq>(
  dispatcher: Optional<DispatcherLike<TReq>>,
): Function1<TReq, boolean> => {
  const dispatcherRef: React.MutableRefObject<Optional<DispatcherLike<TReq>>> =
    useRef();

  useEffect(() => {
    dispatcherRef.current = dispatcher;
  }, [dispatcher, dispatcherRef]);

  return useCallback(
    (req: TReq) => {
      const dispatcher = dispatcherRef.current;
      return isSome(dispatcher)
        ? dispatcher[QueueableLike_enqueue](req)
        : false;
    },
    [dispatcherRef],
  );
};

const emptyObservable = /*@__PURE__*/ Observable.empty<unknown>();

/**
 * @category Hook
 */
export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  } = {},
): readonly [Optional<T>, Function1<TReq, boolean>] => {
  const stream = useStream(streamable, options);
  const dispatch = useDispatcher(stream);
  const value = useObservable<T>(stream ?? emptyObservable, options);
  return [value, dispatch];
};

/**
 * @category Hook
 */
export const useFlowable = <T>(
  flowable: FlowableLike<T>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly replay?: number;
  } = {},
): {
  pause: SideEffect;
  resume: SideEffect;
  value: Optional<T>;
  isPaused: boolean;
} => {
  const stream = useStream(flowable, options);
  const dispatch = useDispatcher(stream);
  const value = useObservable<T>(stream ?? emptyObservable, options);

  const isPaused =
    useObservable<boolean>(
      stream?.[FlowableStreamLike_isPaused] ?? emptyObservable,
      options,
    ) ?? true;

  const pause = useCallback(() => {
    dispatch(true);
  }, [dispatch]);

  const resume = useCallback(() => {
    dispatch(false);
  }, [dispatch]);

  return { resume, pause, value, isPaused };
};

const defaultEnumeratorState = {
  current: none,
  hasCurrent: false,
};

/**
 * @category Hook
 */
export const useEnumerate = <T>(
  enumerable: EnumerableLike<T>,
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

    const elementObservable = useMemo(
      () => pipe(propsPublisher, fn),
      [propsPublisher],
    );
    return useObservable(elementObservable, options) ?? null;
  };

  return ObservableComponent;
};

interface UseAnimation {
  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Function1<TEvent, readonly AnimationConfig<T>[]>,
    eventOptions: { readonly mode: "switching" },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [Optional<EventSourceLike<T>>, Function1<TEvent, boolean>, never];

  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Function1<TEvent, readonly AnimationConfig<T>[]>,
    eventOptions: { readonly mode: "blocking" },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    Optional<EventSourceLike<T>>,
    Function1<TEvent, boolean>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Function1<TEvent, readonly AnimationConfig<T>[]>,
    eventOptions: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [Optional<EventSourceLike<T>>, Function1<TEvent, boolean>, never];
}

/**
 * @category Hook
 */
export const useAnimation: UseAnimation["useAnimation"] = (<TEvent, T = number>(
  animationFactory: Function1<TEvent, readonly AnimationConfig<T>[]>,
  eventOptions: {
    readonly mode: "switching" | "blocking" | "queueing";
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
  deps: readonly unknown[],
  options?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
): readonly [
  Optional<EventSourceLike<T>>,
  Function1<TEvent, boolean>,
  unknown,
] => {
  const [publisher, setPublisher] = useState<Optional<EventPublisherLike<T>>>();
  useEffect(() => {
    const publisher = EventPublisher.create<T>();
    setPublisher(publisher);
    return bindMethod(publisher, DisposableLike_dispose);
  }, []);

  const animationFactoryMemoized = useCallback(animationFactory, deps);

  const streamable = useMemo(
    () =>
      Streamable.createEventHandler<TEvent>(
        event =>
          pipe(
            Observable.animate<T>(...animationFactoryMemoized(event)),
            isSome(publisher)
              ? Observable.forEach(
                  bindMethod(publisher, EventListenerLike_notify),
                )
              : identity,
            Observable.ignoreElements(),
            Observable.subscribeOn(
              createAnimationFrameSchedulerFactory(options?.priority),
            ),
          ),
        eventOptions as any,
      ),
    [
      animationFactoryMemoized,
      eventOptions.mode,
      eventOptions.backpressureStrategy,
      eventOptions.capacity,
      publisher,
      options?.priority,
    ],
  );

  const [value, dispatch] = useStreamable(streamable, { ...options });

  return [publisher, dispatch, value];
}) as UseAnimation["useAnimation"];

interface UseStatefulAnimation {
  /**
   * @category Hook
   */
  useStatefulAnimation<TState, T = number>(
    animationFactory: Function2<TState, TState, readonly AnimationConfig<T>[]>,
    initialState: Factory<TState>,
    eventOptions: {
      readonly mode: "switching";
      readonly equality?: Equality<TState>;
    },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    Optional<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    never,
  ];

  /**
   * @category Hook
   */
  useStatefulAnimation<TState, T = number>(
    animationFactory: Function2<TState, TState, readonly AnimationConfig<T>[]>,
    initialState: Factory<TState>,
    eventOptions: {
      readonly mode: "blocking";
      readonly equality?: Equality<TState>;
    },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    Optional<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useStatefulAnimation<TState, T = number>(
    animationFactory: Function2<TState, TState, readonly AnimationConfig<T>[]>,
    initialState: Factory<TState>,
    eventOptions: {
      readonly mode: "queueing";
      readonly equality?: Equality<TState>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    Optional<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    never,
  ];
}

/**
 * @category Hook
 */
export const useStatefulAnimation: UseStatefulAnimation["useStatefulAnimation"] =
  (<TState, T>(
    animationFactory: Function2<TState, TState, readonly AnimationConfig<T>[]>,
    initialState: Factory<TState>,
    eventOptions: {
      readonly mode: "switching" | "blocking" | "queueing";
      readonly equality?: Equality<TState>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    Optional<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    unknown,
  ] => {
    const [publisher, setPublisher] =
      useState<Optional<EventPublisherLike<T>>>();
    useEffect(() => {
      const publisher = EventPublisher.create<T>();
      setPublisher(publisher);
      return bindMethod(publisher, DisposableLike_dispose);
    }, []);

    const animationFactoryMemoized = useCallback(animationFactory, deps);

    const streamable = useMemo(
      () =>
        Streamable.createStatefulEventHandler(
          (prev, next) =>
            pipe(
              Observable.animate<T>(...animationFactoryMemoized(prev, next)),
              isSome(publisher)
                ? Observable.forEach(
                    bindMethod(publisher, EventListenerLike_notify),
                  )
                : identity,
              Observable.ignoreElements(),
              Observable.subscribeOn(
                createAnimationFrameSchedulerFactory(options?.priority),
              ),
            ),
          initialState,
          eventOptions as any,
        ),
      [
        animationFactoryMemoized,
        eventOptions.mode,
        eventOptions.backpressureStrategy,
        eventOptions.capacity,
        publisher,
        options?.priority,
      ],
    );

    const [value, dispatch] = useStreamable(streamable, options);

    return [publisher, dispatch, value];
  }) as UseStatefulAnimation["useStatefulAnimation"];
