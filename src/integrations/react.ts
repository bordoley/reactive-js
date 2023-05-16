import {
  ComponentType,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as Disposable from "../Disposable.js";
import * as Enumerable from "../Enumerable.js";
import * as EventSource from "../EventSource.js";
import IndexedBufferCollection_empty from "../IndexedBufferCollection/__internal__/IndexedBufferCollection.empty.js";
import type * as MulticastObservable from "../MulticastObservable.js";
import * as Observable from "../Observable.js";
import Observable_isReplayObservable from "../Observable/__internal__/Observable.isReplayObservable.js";
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
  pipeSomeLazy,
  raiseError,
} from "../functions.js";
import {
  CollectionLike_count,
  ContainerOperator,
  DispatcherLike,
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_dispose,
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  EventSourceLike,
  KeyedCollectionLike_get,
  ObservableLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  ReplayObservableLike_buffer,
  SinkLike_notify,
  StoreLike_value,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../types.js";
import * as ReactScheduler from "./react/Scheduler.js";

/**
 * @category Hook
 */
export const useDisposable = <TDisposable extends DisposableLike>(
  factory: () => Optional<TDisposable>,
  deps: readonly unknown[],
): Optional<TDisposable> => {
  const [disposable, setDisposable] = useState<Optional<TDisposable>>(none);

  useEffect(() => {
    const disposable = factory();

    if (isNone(disposable)) {
      return;
    }

    setDisposable(disposable);
    return bindMethod(disposable, DisposableLike_dispose);
  }, [...deps, setDisposable]);

  return disposable;
};

interface UseObserve {
  useObserve<T>(
    observable: Optional<ObservableLike<T>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Optional<T>;

  useObserve<T>(
    factory: Factory<Optional<ObservableLike<T>>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Optional<T>;
}

/**
 * @category Hook
 */
export const useObserve: UseObserve["useObserve"] = <T>(
  observableOrFactory:
    | Optional<ObservableLike<T>>
    | Factory<Optional<ObservableLike<T>>>,
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

  const { backpressureStrategy, capacity, priority } =
    (isFunction(observableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
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
      Disposable.onError(updateError),
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

  const buffer = Observable_isReplayObservable<T>(observable)
    ? observable[ReplayObservableLike_buffer]
    : IndexedBufferCollection_empty<T>();
  const defaultValue =
    buffer[CollectionLike_count] > 0
      ? buffer[KeyedCollectionLike_get](0)
      : none;

  return isSome(error) ? raiseError<T>(error) : state ?? defaultValue;
};

interface UseListen {
  useListen<T>(eventSource: Optional<EventSourceLike<T>>): Optional<T>;

  useListen<T>(
    factory: Factory<Optional<EventSourceLike<T>>>,
    deps: readonly unknown[],
  ): Optional<T>;
}

/**
 * @category Hook
 */
export const useListen: UseListen["useListen"] = <T>(
  eventSourceOrFactory:
    | Optional<EventSourceLike<T>>
    | Factory<Optional<EventSourceLike<T>>>,
  depsOrNone?: readonly unknown[],
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const eventSource = isFunction(eventSourceOrFactory)
    ? useMemo(eventSourceOrFactory, depsOrNone as readonly unknown[])
    : eventSourceOrFactory;

  useDisposable(
    pipeSomeLazy(
      eventSource,
      EventSource.addEventHandler(v => updateState(_ => v)),
      Disposable.onError(updateError),
    ),
    [eventSource, updateState, updateError],
  );

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
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
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

interface UseEnumerate {
  useEnumerate<T>(enumerable: EnumerableLike<T>): Optional<EnumeratorLike<T>>;
  useEnumerate<T>(
    factory: Factory<EnumerableLike<T>>,
    deps: readonly unknown[],
  ): Optional<EnumeratorLike<T>>;
}

/**
 * @category Hook
 */
export const useEnumerate: UseEnumerate["useEnumerate"] = <T>(
  enumerableOrFactory:
    | Optional<EnumerableLike<T>>
    | Factory<Optional<EnumerableLike<T>>>,
  depsOrNone?: readonly unknown[],
): Optional<EnumeratorLike<T>> => {
  const enumerable = isFunction(enumerableOrFactory)
    ? useMemo(enumerableOrFactory, depsOrNone)
    : enumerableOrFactory;
  return useDisposable(pipeSomeLazy(enumerable, Enumerable.enumerate()), [
    enumerable,
  ]);
};

/**
 * @category Hook
 */
export const useDispatcher = <TReq>(
  dispatcher: Optional<DispatcherLike<TReq>>,
): {
  enqueue: Function1<TReq, boolean>;
  complete: SideEffect;
} => {
  const stableDispatcherRef = useRef<Optional<DispatcherLike<TReq>>>(none);

  useEffect(() => {
    stableDispatcherRef.current = dispatcher;
  }, [dispatcher]);

  const enqueue = useCallback(
    (req: TReq) =>
      isSome(stableDispatcherRef.current)
        ? stableDispatcherRef.current[QueueableLike_enqueue](req)
        : true,
    [stableDispatcherRef],
  );

  const complete = useCallback(
    () =>
      isSome(stableDispatcherRef.current)
        ? stableDispatcherRef.current[DispatcherLike_complete]()
        : none,
    [stableDispatcherRef],
  );

  return { enqueue, complete };
};

/**
 * @category Hook
 */
export const useEnumerator = <T>(
  enumerator: Optional<EnumeratorLike<T>>,
): {
  move: Factory<boolean>;
  hasCurrent: boolean;
  current: T;
} => {
  const stableEnumeratorRef = useRef<Optional<EnumeratorLike<T>>>(none);

  useEffect(() => {
    stableEnumeratorRef.current = enumerator;
  }, [enumerator]);

  const [{ current, hasCurrent }, setState] = useState<{
    current: T;
    hasCurrent: boolean;
  }>({
    current: none as T,
    hasCurrent: false,
  });

  const move = useCallback(() => {
    const { current } = stableEnumeratorRef;
    if (isSome(current) && current[EnumeratorLike_move]()) {
      setState({
        current: current[EnumeratorLike_current],
        hasCurrent: true,
      });
      return true;
    } else {
      setState({
        current: none as T,
        hasCurrent: false,
      });
      return false;
    }
  }, [stableEnumeratorRef, setState]);

  return { current, hasCurrent, move };
};

/**
 * @category Hook
 */
export const usePauseable = (
  pauseable: Optional<PauseableLike>,
): {
  isPaused: boolean;
  pause: SideEffect;
  resume: SideEffect;
} => {
  const stablePauseableRef = useRef<Optional<PauseableLike>>(none);

  useEffect(() => {
    stablePauseableRef.current = pauseable;
  }, [pauseable]);

  const pause = useCallback(
    () =>
      isSome(stablePauseableRef.current)
        ? stablePauseableRef.current[PauseableLike_pause]()
        : none,
    [stablePauseableRef],
  );

  const resume = useCallback(
    () =>
      isSome(stablePauseableRef.current)
        ? stablePauseableRef.current[PauseableLike_resume]()
        : none,
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

export const createComponent = <TProps>(
  fn: ContainerOperator<MulticastObservable.Type, TProps, ReactElement>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsPublisher = useDisposable(
      () => Observable.createPublisher<TProps>({ replay: 1 }),
      [],
    );

    useEffect(() => {
      if (isSome(propsPublisher)) {
        propsPublisher[SinkLike_notify](props);
      }
    }, [propsPublisher, props]);

    return (
      useObserve(pipeSomeLazy(propsPublisher, fn), [propsPublisher], options) ??
      null
    );
  };

  return ObservableComponent;
};
