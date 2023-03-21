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
  Factory,
  Optional,
  SideEffect,
  SideEffect1,
  isFunction,
  isSome,
  none,
  pipe,
  raiseError,
} from "../functions.js";
import {
  DispatcherLike,
  ObservableLike,
  SubjectLike,
  SubjectLike_publish,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import * as Subject from "../rx/Subject.js";
import { SchedulerLike } from "../scheduling.js";
import {
  FlowableLike,
  FlowableState_paused,
  FlowableState_running,
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
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const { scheduler: schedulerOption } = options;

  useEffect(() => {
    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

    const subscription = pipe(
      observable,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler),
      Disposable.onError(updateError),
    );

    const disposable = scheduler === schedulerOption ? subscription : scheduler;

    return () => {
      disposable[DisposableLike_dispose]();
    };
  }, [observable, updateState, updateError, schedulerOption]);

  return isSome(error) ? raiseError<T>(error) : state;
};

export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): readonly [Optional<T>, SideEffect1<TReq>] => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const { scheduler: schedulerOption } = options;

  const dispatcherRef: React.MutableRefObject<Optional<DispatcherLike<TReq>>> =
    useRef();

  useEffect(() => {
    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

    const stream: StreamLike<TReq, T> =
      streamable[StreamableLike_stream](scheduler);

    dispatcherRef.current = stream;

    const subscription = pipe(
      stream,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler),
      Disposable.onError(updateError),
      Disposable.addTo(stream),
    );

    const disposable = scheduler === schedulerOption ? subscription : scheduler;

    return () => {
      disposable[DisposableLike_dispose]();
    };
  }, [streamable, updateState, updateError, schedulerOption, dispatcherRef]);

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

export const useFlowable = <T>(
  flowable: FlowableLike<T>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): {
  pause: SideEffect;
  resume: SideEffect;
  value: Optional<T>;
  isPaused: boolean;
} => {
  const [value, dispatch] = useStreamable(flowable, options);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isPaused) {
      dispatch(FlowableState_paused);
    } else {
      dispatch(FlowableState_running);
    }
  }, [isPaused, dispatch]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, [setIsPaused]);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, [setIsPaused]);

  return { resume, pause, value, isPaused };
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
