import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  EventSourceLike_subscribe,
  ObservableLike,
  ProducerLike,
} from "../../computations.js";
import {
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
  bindMethod,
  none,
  pipe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import {
  ConsumerLike,
  DisposableLike,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as DeferredEventSource from "../__internal__/DeferredEventSource.js";
import {
  ProducerComputeContext_awaitOrObserve,
  ProducerComputeContext_constant,
  ProducerComputeContext_memoOrUse,
  assertCurrentContext,
} from "./__private__/Producer.compute.js";

export interface Signature {
  __await<T>(producer: EventSourceLike<T>): T;

  __constant<T>(value: T, ...args: unknown[]): T;

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

  __subscribe<T>(src: EventSourceLike<T>): Optional<T>;

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
  return ctx[ProducerComputeContext_memoOrUse](false, f, ...args);
};

export const __await: Signature["__await"] = <T>(src: EventSourceLike<T>) => {
  const ctx = assertCurrentContext();

  const producer = Computation.isDeferred(src)
    ? (src as ProducerLike<T>)
    : (DeferredEventSource.create<T, ConsumerLike<T>>(
        bindMethod(src, EventSourceLike_subscribe),
        {
          [ComputationLike_isPure]: src[ComputationLike_isPure],
          [ComputationLike_isSynchronous]: false,
        },
      ) as ProducerLike<T>);
  return ctx[ProducerComputeContext_awaitOrObserve](producer, true) as T;
};

export const __constant: Signature["__constant"] = <T>(
  value: T,
  ...args: unknown[]
) => {
  const ctx = assertCurrentContext();
  return ctx[ProducerComputeContext_constant](value, ...args);
};

export const __subscribe: Signature["__subscribe"] = <T>(
  src: EventSourceLike<T>,
) => {
  const ctx = assertCurrentContext();

  const producer = Computation.isDeferred(src)
    ? (src as ProducerLike<T>)
    : (DeferredEventSource.create<T, ConsumerLike<T>>(
        bindMethod(src, EventSourceLike_subscribe),
        {
          [ComputationLike_isPure]: src[ComputationLike_isPure],
          [ComputationLike_isSynchronous]: false,
        },
      ) as ProducerLike<T>);

  return ctx[ProducerComputeContext_awaitOrObserve](producer, false);
};

export const __do: Signature["__do"] = /*@__PURE__*/ (() => {
  const deferSideEffect = (
    create: (f: SideEffect1<ObserverLike<unknown>>) => ObservableLike,
    f: (...args: any[]) => void,
    ...args: unknown[]
  ) =>
    create(observer => {
      const callback = function* () {
        f(...args);
        observer[EventListenerLike_notify](none);
        observer[SinkLike_complete]();
      };

      pipe(
        observer[SchedulerLike_schedule](callback),
        Disposable.addTo(observer),
      );
    });

  const createProducerWithSideEffects = <T>(
    f: (observer: ConsumerLike<T>) => void,
  ) =>
    DeferredEventSource.create<T, ConsumerLike<T>>(f, {
      [ComputationLike_isSynchronous]: false,
      [ComputationLike_isPure]: false,
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const observable = ctx[ProducerComputeContext_memoOrUse](
      false,
      deferSideEffect,
      createProducerWithSideEffects,
      f,
      ...args,
    );

    const subscribeOnScheduler = ctx[ProducerComputeContext_memoOrUse](
      false,
      EventSource.subscribe,
    );
    ctx[ProducerComputeContext_memoOrUse](
      true,
      subscribeOnScheduler,
      observable,
    );
  };
})();

export const __using: Signature["__using"] = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[ProducerComputeContext_memoOrUse](true, f, ...args);
};
