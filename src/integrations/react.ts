import {
  ComponentType,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../containers.js";
import {
  Factory,
  Optional,
  SideEffect,
  SideEffect1,
  ignore,
  isFunction,
  isSome,
  none,
  pipe,
  raiseError,
} from "../functions.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  EnumerableLike,
  ObservableLike,
  SubjectLike,
  SubjectLike_publish,
} from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Subject from "../rx/Subject.js";
import { SchedulerLike } from "../scheduling.js";
import {
  FlowableLike,
  FlowableStreamLike_isPaused,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import { DisposableLike_dispose, QueueableLike_push } from "../util.js";
import * as Disposable from "../util/Disposable.js";
import { createSchedulerWithNormalPriority } from "./scheduler.js";

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 *
 * @category Hook
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  options: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
    readonly maxBufferSize?: number;
  } = {},
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const { maxBufferSize = MAX_SAFE_INTEGER, scheduler: schedulerOption } =
    options;

  useEffect(() => {
    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

    const subscription = pipe(
      observable,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler, { maxBufferSize }),
      Disposable.onError(updateError),
    );

    const disposable = scheduler === schedulerOption ? subscription : scheduler;

    return () => {
      disposable[DisposableLike_dispose]();
    };
  }, [observable, updateState, updateError, schedulerOption, maxBufferSize]);

  return isSome(error) ? raiseError<T>(error) : state;
};

const useStreamableInternal = <
  TReq,
  T,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
>(
  streamable: StreamableLike<TReq, T, TStream>,
  options: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
    readonly maxBufferSize?: number;
  } = {},
): Optional<TStream> => {
  const [stream, setStream] = useState<Optional<TStream>>(none);

  const { maxBufferSize = MAX_SAFE_INTEGER, scheduler: schedulerOption } =
    options;

  useEffect(() => {
    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

    const stream: TStream = streamable[StreamableLike_stream](scheduler, {
      maxBufferSize,
    });

    setStream(stream);

    const disposable = scheduler === schedulerOption ? stream : scheduler;

    return () => {
      disposable[DisposableLike_dispose]();
    };
  }, [streamable, setStream, schedulerOption, maxBufferSize]);

  return stream;
};

const useStream = <TReq, T>(
  stream: Optional<StreamLike<TReq, T>>,
): readonly [Optional<T>, SideEffect1<TReq>] => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const dispatcherRef: React.MutableRefObject<Optional<DispatcherLike<TReq>>> =
    useRef();

  useEffect(() => {
    dispatcherRef.current = stream;

    if (isSome(stream)) {
      const subscription = pipe(
        stream,
        Observable.forEach<T>(v => updateState(_ => v)),
        Observable.subscribe(stream[DispatcherLike_scheduler]),
        Disposable.onError(updateError),
        Disposable.addTo(stream),
      );
      return () => {
        subscription[DisposableLike_dispose]();
      };
    } else {
      return ignore;
    }
  }, [stream, updateState, updateError, dispatcherRef]);

  const dispatch = useCallback(
    (req: TReq) => {
      const dispatcher = dispatcherRef.current;
      if (isSome(dispatcher)) {
        dispatcher[QueueableLike_push](req);
      }
    },
    [dispatcherRef],
  );

  return isSome(error)
    ? raiseError<readonly [Optional<T>, SideEffect1<TReq>]>(error)
    : [state, dispatch];
};

/**
 * @category Hook
 */
export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  options: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
    readonly maxBufferSize?: number;
  } = {},
): readonly [Optional<T>, SideEffect1<TReq>] => {
  const stream = useStreamableInternal(streamable, options);
  return useStream(stream);
};

const emptyObservable = /*@__PURE__*/ Observable.empty<boolean>();

/**
 * @category Hook
 */
export const useFlowable = <T>(
  flowable: FlowableLike<T>,
  options: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
    readonly maxBufferSize?: number;
  } = {},
): {
  pause: SideEffect;
  resume: SideEffect;
  value: Optional<T>;
  isPaused: boolean;
} => {
  const stream = useStreamableInternal(flowable, options);
  const [value, dispatch] = useStream(stream);

  const isPaused =
    useObservable(
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
export const useEnumerable = <T>(
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

    return () => enumerator[DisposableLike_dispose]();
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

const createReplaySubject = <TProps>() => Subject.create<TProps>({ replay: 1 });

export const createComponent = <TProps>(
  fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useMemo<SubjectLike<TProps>>(createReplaySubject, [
      createReplaySubject,
    ]);

    propsSubject[SubjectLike_publish](props);

    const elementObservable = useMemo(
      () => pipe(propsSubject, Observable.distinctUntilChanged<TProps>(), fn),
      [propsSubject],
    );
    return useObservable(elementObservable, options) ?? null;
  };

  return ObservableComponent;
};
