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
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../collections.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  MulticastObservableLike,
  ObservableLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../concurrent.js";
import * as Observable from "../concurrent/Observable.js";
import * as Subject from "../concurrent/Subject.js";
import {
  EventSourceLike,
  SinkLike_notify,
  StoreLike_value,
} from "../events.js";
import * as EventSource from "../events/EventSource.js";
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
} from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import * as ReactScheduler from "./react/Scheduler.js";

interface ReactModule {
  createComponent<TProps>(
    fn: Function1<
      MulticastObservableLike<TProps>,
      ObservableLike<ReactElement>
    >,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): ComponentType<TProps>;

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
  useEnumerator<T>(enumerator: Optional<EnumeratorLike<T>>): {
    move: Factory<boolean>;
    hasCurrent: boolean;
    current: T;
  };

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

  /**
   */
  usePauseable(pauseable: Optional<PauseableLike>): {
    isPaused: boolean;
    pause: SideEffect;
    resume: SideEffect;
  };

  /**
   */
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

type Signature = ReactModule;

export const createComponent: Signature["createComponent"] = <TProps>(
  fn: Function1<MulticastObservableLike<TProps>, ObservableLike<ReactElement>>,
  options: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  } = {},
) => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useDisposable(
      () => Subject.create<TProps>({ replay: 1 }),
      [],
    );

    useEffect(() => {
      propsSubject?.[SinkLike_notify](props);
    }, [propsSubject, props]);

    return (
      useObserve(pipeSomeLazy(propsSubject, fn), [propsSubject], options) ??
      null
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

    pipe(disposable, Disposable.onError(setError));

    setDisposable(disposable);
    return bindMethod(disposable, DisposableLike_dispose);
  }, [...deps, setDisposable]);

  return isSome(error) ? raiseError(error) : disposable;
};

export const useEnumerator: Signature["useEnumerator"] = <T>(
  enumerator: Optional<EnumeratorLike<T>>,
) => {
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
      Disposable.onError(updateError),
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
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
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

export const useStream: Signature["useStream"] = <
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
