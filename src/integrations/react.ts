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
  ignore,
  invoke,
  isFunction,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseError,
  returns,
} from "../functions.js";
import { ReadonlyObjectMapLike } from "../keyed-containers.js";
import * as ReadonlyObjectMap from "../keyed-containers/ReadonlyObjectMap.js";
import {
  AnimationConfig,
  EnumerableLike,
  ObservableLike,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
  PublisherLike,
  RunnableLike,
} from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Publisher from "../rx/Publisher.js";
import * as Runnable from "../rx/Runnable.js";
import * as Scheduler from "../scheduling/Scheduler.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DispatcherLike,
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";
import * as EventPublisher from "../util/EventPublisher.js";
import * as EventSource from "../util/EventSource.js";
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
  useStream<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<TStream>;

  useStream<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(
    factory: Factory<StreamableLike<TReq, T, TStream>>,
    dep: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Optional<TStream>;
}

/**
 * @category Hook
 */
export const useStream: UseStream["useStream"] = <
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
>(
  streamableOrFactory:
    | StreamableLike<TReq, T, TStream>
    | Factory<StreamableLike<TReq, T, TStream>>,
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
): Optional<TStream> => {
  const [stream, setStream] = useState<Optional<TStream>>(none);

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

    const stream: TStream & DisposableLike = streamable[StreamableLike_stream](
      scheduler,
      {
        replay,
        backpressureStrategy,
        capacity,
      },
    );

    setStream(stream);

    return bindMethod(stream, DisposableLike_dispose);
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
  const dispatch = useDispatcher(stream);
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
  const flowObservableRef = useRef<Optional<PauseableObservableLike<T>>>(none);

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
    const PauseableObservable = pipe(
      runnable,
      Runnable.flow(scheduler, options),
    );
    flowObservableRef.current = PauseableObservable;

    return bindMethod(PauseableObservable, DisposableLike_dispose);
  }, [runnable, priority, backpressureStrategy, capacity]);

  const value = useObservable<T>(
    flowObservableRef.current ?? emptyObservable,
    options,
  );

  const isPaused =
    useObservable<boolean>(
      flowObservableRef.current?.[PauseableObservableLike_isPaused] ??
        emptyObservable,
      options,
    ) ?? true;

  const pause = useCallback(() => {
    flowObservableRef.current?.[PauseableLike_pause]();
  }, [flowObservableRef]);

  const resume = useCallback(() => {
    flowObservableRef.current?.[PauseableLike_resume]();
  }, [flowObservableRef]);

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

const usePublishers = <T>(
  keyMap: ReadonlyObjectMapLike<unknown, string>,
): ReadonlyObjectMapLike<EventPublisherLike<T>, string> => {
  const [publishers, setPublishers] =
    useState<Optional<ReadonlyObjectMapLike<EventPublisherLike<T>>>>();

  useEffect(() => {
    const publishers = pipe(
      keyMap,
      ReadonlyObjectMap.map<unknown, EventPublisherLike<T>, string>(_ =>
        EventPublisher.create<T>(),
      ),
    );

    setPublishers(publishers);
    return pipeLazy(
      publishers,
      ReadonlyObjectMap.forEachWithKey<EventPublisherLike<T>, string>(
        invoke(DisposableLike_dispose),
      ),
      ignore,
    );
  }, [keyMap]);

  return publishers ?? ReadonlyObjectMap.empty<EventPublisherLike<T>>();
};

interface UseAnimations {
  /**
   * @category Hook
   */
  useAnimations<T = number, TEvent = unknown>(
    animationFactory: Factory<
      ReadonlyObjectMapLike<
        Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>
      >
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
    ReadonlyObjectMapLike<EventSourceLike<{ event: TEvent; value: T }>>,
    SideEffect1<TEvent>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimations<T = number, TEvent = unknown>(
    animationFactory: Factory<
      ReadonlyObjectMapLike<
        Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>
      >
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
    ReadonlyObjectMapLike<EventSourceLike<{ event: TEvent; value: T }>>,
    SideEffect1<TEvent>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimations<T = number, TEvent = unknown>(
    animationFactory: Factory<
      ReadonlyObjectMapLike<
        Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>
      >
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
    ReadonlyObjectMapLike<EventSourceLike<{ event: TEvent; value: T }>>,
    SideEffect1<TEvent>,
    never,
  ];

  /**
   * @category Hook
   */
  useAnimations<T = number, TEvent = unknown>(
    animationFactory: Factory<
      ReadonlyObjectMapLike<
        Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>
      >
    >,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    ReadonlyObjectMapLike<EventSourceLike<{ event: TEvent; value: T }>>,
    SideEffect1<TEvent>,
    never,
  ];
}
export const useAnimations: UseAnimations["useAnimations"] = (<
  T = number,
  TEvent = unknown,
>(
  animationFactory: Factory<
    ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >
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
  ReadonlyObjectMapLike<EventSourceLike<{ event: TEvent; value: T }>>,
  SideEffect1<TEvent>,
  unknown,
] => {
  const animations = useMemo(animationFactory, deps);
  const publishers = usePublishers<{ event: TEvent; value: T }>(animations);

  const [value, dispatch] = useStreamable(
    () =>
      Streamable.createEventHandler((event: TEvent) => {
        const observables: ReadonlyObjectMapLike<
          ObservableLike<T>,
          string
        > = pipe(
          animations,
          ReadonlyObjectMap.mapWithKey<
            Function1<
              TEvent,
              AnimationConfig<T> | readonly AnimationConfig<T>[]
            >,
            ObservableLike<T>,
            string
          >((factory, key: string) =>
            pipe(
              Observable.animate<T>(factory(event)),
              Observable.forEach(value => {
                const publisher = publishers[key];
                if (isSome(publisher)) {
                  // FIXME: consider reusing an event object to avoid memory allocations
                  publisher[EventListenerLike_notify]({ event, value });
                }
              }),
              Observable.ignoreElements<T>(),
            ),
          ),
        );

        return pipe(
          Observable.fromEnumeratorFactory(
            pipeLazy(observables, ReadonlyObjectMap.values()),
          ),
          Observable.map(
            Observable.subscribeOn(() =>
              Scheduler.createAnimationFrameScheduler(getScheduler(options)),
            ),
          ),
          Observable.mergeAll({ concurrency: options.concurrency }),
        );
      }, options as any),
    [
      animations,
      options.concurrency,
      options.mode,
      publishers,
      options?.priority,
    ],
    options,
  );

  return [publishers, dispatch, value];
}) as UseAnimations["useAnimations"];

interface UseAnimation {
  /**
   * @category Hook
   */
  useAnimation<T = number, TEvent = unknown>(
    animationFactory: Function1<
      TEvent,
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
    EventSourceLike<{ event: TEvent; value: T }>,
    SideEffect1<TEvent>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEvent = unknown>(
    animationFactory: Function1<
      TEvent,
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
    EventSourceLike<{ event: TEvent; value: T }>,
    SideEffect1<TEvent>,
    boolean,
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEvent = unknown>(
    animationFactory: Function1<
      TEvent,
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
    EventSourceLike<{ event: TEvent; value: T }>,
    SideEffect1<TEvent>,
    never,
  ];

  /**
   * @category Hook
   */
  useAnimation<T = number, TEvent = unknown>(
    animationFactory: Function1<
      TEvent,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): readonly [
    EventSourceLike<{ event: TEvent; value: T }>,
    SideEffect1<TEvent>,
    never,
  ];
}
export const useAnimation: UseAnimation["useAnimation"] = (<
  T = unknown,
  TEvent = number,
>(
  animationFactory: Function1<
    TEvent,
    AnimationConfig<T> | readonly AnimationConfig<T>[]
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
  EventSourceLike<{ event: TEvent; value: T }>,
  SideEffect1<TEvent>,
  unknown,
] => {
  const [animatedValues, dispatch, isAnimationRunning] = useAnimations<
    T,
    TEvent
  >(
    returns({
      value: animationFactory,
    }),
    deps,
    options,
  );

  return [
    animatedValues.value ?? EventSource.empty(),
    dispatch,
    isAnimationRunning,
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
