import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ReactiveSourceLike,
  ReactiveSourceLike_subscribe,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../../computations.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Optional,
  SideEffect,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
  Updater,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import {
  BackpressureStrategy,
  DisposableLike,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as ReactiveSource from "../ReactiveSource.js";
import * as Streamable from "../Streamable.js";
import * as DeferredReactiveSource from "../__internal__/DeferredReactiveSource.js";
import {
  ComputeContext_awaitOrObserve,
  ComputeContext_constant,
  ComputeContext_memoOrUse,
  ComputeContext_observableConfig,
  ComputeContext_observer,
  assertCurrentContext,
} from "./__private__/Observable.compute.js";

export interface Signature {
  __await<T>(observable: ReactiveSourceLike<T>): T;

  __constant<T>(value: T, ...args: unknown[]): T;

  __currentScheduler(): SchedulerLike;

  __do(fn: SideEffect): void;
  __do<TA>(fn: SideEffect1<TA>, a: TA): void;
  __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
  __do<TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
  __do<TA, TB, TC, TD>(
    fn: SideEffect4<TA, TB, TC, TD>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): void;
  __do<TA, TB, TC, TD, TE>(
    fn: SideEffect5<TA, TB, TC, TD, TE>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): void;
  __do<TA, TB, TC, TD, TE, TF>(
    fn: SideEffect6<TA, TB, TC, TD, TE, TF>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): void;

  __memo<T>(fn: Factory<T>): T;
  __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
  __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
  __memo<TA, TB, TC, TD, T>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  __memo<TA, TB, TC, TD, TE, T>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  __memo<TA, TB, TC, TD, TE, TF, T>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;

  __observe<T>(src: ReactiveSourceLike<T>): Optional<T>;

  __state<T>(
    initialState: () => T,
    options?: {
      readonly equality?: Optional<Equality<T>>;
      readonly scheduler?: SchedulerLike;
      readonly capacity?: number;
    },
  ): StreamLike<Updater<T>, T>;

  __stream<TStreamable extends StreamableLike>(
    streamable: TStreamable,
    {
      autoDispose,
      backpressureStrategy,
      capacity,
      scheduler,
    }?: {
      readonly autoDispose?: boolean;
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): StreamOf<TStreamable>;

  __using<T extends DisposableLike>(fn: Factory<T>): T;
  __using<TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
  __using<TA, TB, T extends DisposableLike>(
    fn: Function2<TA, TB, T>,
    a: TA,
    b: TB,
  ): T;
  __using<TA, TB, TC, T extends DisposableLike>(
    fn: Function3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  __using<TA, TB, TC, TD, T extends DisposableLike>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  __using<TA, TB, TC, TD, TE, T extends DisposableLike>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  __using<TA, TB, TC, TD, TE, TF, T extends DisposableLike>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}

export const __memo: Signature["__memo"] = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_memoOrUse](false, f, ...args);
};

export const __await: Signature["__await"] = <T>(
  src: ReactiveSourceLike<T>,
) => {
  const ctx = assertCurrentContext();

  const observable = Computation.isDeferred(src)
    ? (src as ObservableLike<T>)
    : DeferredReactiveSource.create<T, ObserverLike<T>>(
        bindMethod(src, ReactiveSourceLike_subscribe),
        {
          [ComputationLike_isPure]: src[ComputationLike_isPure],
          [ComputationLike_isSynchronous]: false,
        },
      );
  return ctx[ComputeContext_awaitOrObserve](observable, true) as T;
};

export const __constant: Signature["__constant"] = <T>(
  value: T,
  ...args: unknown[]
) => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_constant](value, ...args);
};

export const __observe: Signature["__observe"] = <T>(
  src: ReactiveSourceLike<T>,
) => {
  const ctx = assertCurrentContext();

  const observable = Computation.isDeferred(src)
    ? (src as ObservableLike<T>)
    : DeferredReactiveSource.create<T, ObserverLike<T>>(
        bindMethod(src, ReactiveSourceLike_subscribe),
        {
          [ComputationLike_isPure]: src[ComputationLike_isPure],
          [ComputationLike_isSynchronous]: false,
        },
      );

  return ctx[ComputeContext_awaitOrObserve](observable, false);
};

const createSynchronousObservableWithSideEffects = <T>(
  f: (observer: ObserverLike<T>) => void,
) =>
  DeferredReactiveSource.create(f, {
    [ComputationLike_isSynchronous]: true,
    [ComputationLike_isPure]: false,
  });

const createDeferredbservableWithSideEffects = <T>(
  f: (observer: ObserverLike<T>) => void,
) =>
  DeferredReactiveSource.create(f, {
    [ComputationLike_isSynchronous]: false,
    [ComputationLike_isPure]: false,
  });

export const __do: Signature["__do"] = /*@__PURE__*/ (() => {
  const deferSideEffect = (
    create: (f: SideEffect1<ObserverLike<unknown>>) => ObservableLike,
    f: (...args: any[]) => void,
    ...args: unknown[]
  ) =>
    create(observer => {
      const callback = () => {
        f(...args);
        observer[EventListenerLike_notify](none);
        observer[SinkLike_complete]();
      };

      pipe(
        observer[SchedulerLike_schedule](callback),
        Disposable.addTo(observer),
      );
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = ctx[ComputeContext_observer];
    const observableConfig = ctx[ComputeContext_observableConfig];
    const observable = ctx[ComputeContext_memoOrUse](
      false,
      deferSideEffect,
      observableConfig[ComputationLike_isSynchronous]
        ? createSynchronousObservableWithSideEffects
        : createDeferredbservableWithSideEffects,
      f,
      ...args,
    );

    const schedulerOption = __constant({ scheduler }, scheduler);

    const subscribeOnScheduler = ctx[ComputeContext_memoOrUse](
      false,
      ReactiveSource.subscribe,
      schedulerOption,
    );
    ctx[ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
  };
})();

export const __using: Signature["__using"] = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_memoOrUse](true, f, ...args);
};

export const __currentScheduler: Signature["__currentScheduler"] = () => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_observer];
};

export const __stream: Signature["__stream"] = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <TStreamable extends StreamableLike>(
    streamable: TStreamable,
    scheduler: SchedulerLike,
    autoDispose: Optional<boolean>,
    capacity: Optional<number>,
    backpressureStrategy: Optional<BackpressureStrategy>,
  ): StreamOf<TStreamable> =>
    streamable[StreamableLike_stream](scheduler, {
      autoDispose,
      backpressureStrategy,
      capacity,
    }) as StreamOf<TStreamable>;

  return <TStreamable extends StreamableLike>(
    streamable: TStreamable,
    {
      autoDispose,
      backpressureStrategy,
      capacity,
      scheduler,
    }: {
      readonly autoDispose?: boolean;
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    } = {},
  ): StreamOf<TStreamable> => {
    const currentScheduler = __currentScheduler();
    return __using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      autoDispose,
      capacity,
      backpressureStrategy,
    );
  };
})();

export const __state: Signature["__state"] = /*@__PURE__*/ (() => {
  const createStateOptions = <T>(equality: Optional<Equality<T>>) =>
    isSome(equality) ? { equality } : none;

  return <T>(
    initialState: () => T,
    options: {
      readonly equality?: Optional<Equality<T>>;
      readonly scheduler?: SchedulerLike;
      readonly capacity?: number;
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(Streamable.stateStore, initialState, optionsMemo);
    return __stream(streamable, options) as StreamLike<Updater<T>, T>;
  };
})();
