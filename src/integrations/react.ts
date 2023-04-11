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
  ignore,
  invoke,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseError,
} from "../functions.js";
import { ReadonlyRecordLike } from "../keyed-containers.js";
import * as ReadonlyRecord from "../keyed-containers/ReadonlyRecord.js";
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

const createAnimationFrameSchedulerFactory = (priority?: number) => () => {
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

const usePublishers = <T>(
  keyMap: ReadonlyRecordLike<unknown, string>,
): ReadonlyRecordLike<EventPublisherLike<T>, string> => {
  const [publishers, setPublishers] =
    useState<Optional<ReadonlyRecordLike<EventPublisherLike<T>>>>();

  useEffect(() => {
    const publishers = pipe(
      keyMap,
      ReadonlyRecord.map<unknown, EventPublisherLike<T>, string>(_ =>
        EventPublisher.create<T>(),
      ),
    );

    setPublishers(publishers);
    return pipeLazy(
      publishers,
      ReadonlyRecord.forEachWithKey<EventPublisherLike<T>, string>(
        invoke(DisposableLike_dispose),
      ),
      ignore,
    );
  }, [keyMap]);

  return publishers ?? ReadonlyRecord.empty<EventPublisherLike<T>>();
};

const mapAnimationConfigToObservable =
  <T>(publishers: ReadonlyRecordLike<EventPublisherLike<T>, string>) =>
  (animations: readonly AnimationConfig<T>[], key: string) =>
    pipe(
      Observable.animate<T>(...animations),
      Observable.forEach(v => {
        const publisher = publishers[key];
        if (isSome(publisher)) {
          publisher[EventListenerLike_notify](v);
        }
      }),
      Observable.ignoreElements<T>(),
    );

const createTransition = <T>(
  observables: Readonly<Record<string, ObservableLike<T>>>,
  options: {
    readonly concurrency?: number;
    readonly priority?: 1 | 2 | 3 | 4 | 5;
  } = {},
) => {
  return pipe(
    Observable.fromEnumeratorFactory(
      pipeLazy(observables, ReadonlyRecord.values()),
    ),
    Observable.map(
      Observable.subscribeOn(
        createAnimationFrameSchedulerFactory(options?.priority),
      ),
    ),
    Observable.mergeAll({ concurrency: options.concurrency }),
  );
};

interface UseAnimation {
  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Factory<
      ReadonlyRecordLike<Function1<TEvent, readonly AnimationConfig<T>[]>>
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "switching";
      readonly concurrency?: number;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<TEvent, boolean>,
    never,
  ];

  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Factory<
      ReadonlyRecordLike<Function1<TEvent, readonly AnimationConfig<T>[]>>
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "blocking";
      readonly concurrency?: number;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<TEvent, boolean>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Factory<
      ReadonlyRecordLike<Function1<TEvent, readonly AnimationConfig<T>[]>>
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "queueing";
      readonly concurrency?: number;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<TEvent, boolean>,
    never,
  ];

  /**
   * @category Hook
   */
  useAnimation<TEvent, T = number>(
    animationFactory: Factory<
      ReadonlyRecordLike<Function1<TEvent, readonly AnimationConfig<T>[]>>
    >,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<TEvent, boolean>,
    never,
  ];
}
export const useAnimation: UseAnimation["useAnimation"] = (<TEvent, T>(
  animationFactory: Factory<
    ReadonlyRecordLike<Function1<TEvent, readonly AnimationConfig<T>[]>>
  >,
  deps: readonly unknown[],
  options: {
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly concurrency?: number;
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): readonly [
  ReadonlyRecordLike<EventSourceLike<T>>,
  Function1<TEvent, boolean>,
  unknown,
] => {
  const animations = useMemo(animationFactory, deps);
  const publishers = usePublishers<T>(animations);

  const streamable = useMemo(
    () =>
      Streamable.createEventHandler((event: TEvent) => {
        const observables: Readonly<Record<string, ObservableLike<T>>> = pipe(
          animations,
          ReadonlyRecord.mapWithKey<
            Function1<TEvent, readonly AnimationConfig<T>[]>,
            readonly AnimationConfig<T>[],
            string
          >((factory, _) => factory(event)),
          ReadonlyRecord.mapWithKey<
            readonly AnimationConfig<T>[],
            ObservableLike<T>,
            string
          >(mapAnimationConfigToObservable(publishers)),
        );

        return createTransition(observables, options);
      }, options as any),
    [
      animations,
      options.concurrency,
      options.mode,
      publishers,
      options?.priority,
    ],
  );

  const [value, dispatch] = useStreamable(streamable, options);

  return [publishers, dispatch, value];
}) as UseAnimation["useAnimation"];

interface UseAnimatedState {
  /**
   * @category Hook
   */
  useAnimatedState<TState, T = number>(
    initialState: Factory<TState>,
    animationFactory: Factory<
      ReadonlyRecordLike<
        Function2<TState, TState, readonly AnimationConfig<T>[]>
      >
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "switching";
      readonly equality?: Equality<TState>;
      readonly concurrency?: number;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    Optional<TState>,
  ];

  /**
   * @category Hook
   */
  useAnimatedState<TState, T = number>(
    initialState: Factory<TState>,
    animationFactory: Factory<
      ReadonlyRecordLike<
        Function2<TState, TState, readonly AnimationConfig<T>[]>
      >
    >,
    deps: readonly unknown[],
    options: {
      readonly mode: "queueing";
      readonly equality?: Equality<TState>;
      readonly concurrency?: number;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    Optional<TState>,
  ];

  /**
   * @category Hook
   */
  useAnimatedState<TState, T = number>(
    initialState: Factory<TState>,
    animationFactory: Factory<
      ReadonlyRecordLike<
        Function2<TState, TState, readonly AnimationConfig<T>[]>
      >
    >,
    deps: readonly unknown[],
    options?: {
      readonly concurrency?: number;
      readonly equality?: Equality<TState>;
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyRecordLike<EventSourceLike<T>>,
    Function1<Updater<TState>, boolean>,
    Optional<TState>,
  ];
}

export const useAnimatedState: UseAnimatedState["useAnimatedState"] = (<
  TState,
  T,
>(
  initialState: Factory<TState>,
  animationFactory: Factory<
    ReadonlyRecordLike<Function2<TState, TState, readonly AnimationConfig<T>[]>>
  >,
  deps: readonly unknown[],
  options: {
    readonly mode?: "switching" | "queueing";
    readonly equality?: Equality<TState>;
    readonly concurrency?: number;
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): readonly [
  ReadonlyRecordLike<EventSourceLike<T>>,
  Function1<Updater<TState>, boolean>,
  Optional<TState>,
] => {
  const animations = useMemo(animationFactory, deps);
  const publishers = usePublishers<T>(animations);

  const streamable = useMemo(
    () =>
      Streamable.createStateStore(
        initialState,
        (prev, next) => {
          const observables: Readonly<Record<string, ObservableLike<T>>> = pipe(
            animations,
            ReadonlyRecord.mapWithKey<
              Function2<TState, TState, readonly AnimationConfig<T>[]>,
              readonly AnimationConfig<T>[],
              string
            >((factory, _) => factory(prev, next)),
            ReadonlyRecord.mapWithKey<
              readonly AnimationConfig<T>[],
              ObservableLike<T>,
              string
            >(mapAnimationConfigToObservable(publishers)),
          );

          return createTransition(observables, options);
        },
        options as any,
      ),
    [
      animations,
      options.concurrency,
      options.equality,
      options.mode,
      options?.priority,
      publishers,
    ],
  );

  const [value, dispatch] = useStreamable(streamable, options);

  return [publishers, dispatch, value];
}) as UseAnimatedState["useAnimatedState"];
