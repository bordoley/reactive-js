import Disposable_addTo from "../Disposable/__internal__/Disposable.addTo.js";
import Observable_create from "../Observable/__internal__/Observable.create.js";
import Runnable_create from "../Runnable/__internal__/Runnable.create.js";
import Streamable_createStateStore from "../Streamable/__internal__/Streamable.createStateStore.js";
import {
  __ComputeContext_awaitOrObserve,
  __ComputeContext_constant,
  __ComputeContext_memoOrUse,
  __ComputeContext_observableConfig,
  __ComputeContext_observer,
} from "../__internal__/symbols.js";
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
} from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  ObservableLike,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SchedulerLike_schedule,
  SinkLike_notify,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../types.js";
import { assertCurrentContext } from "./__internal__/Observable.compute.js";
import Observable_subscribe from "./__internal__/Observable.subscribe.js";

interface __Memo {
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
}
export const __memo: __Memo["__memo"] = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_memoOrUse](false, f, ...args);
};

export const __await = <T>(observable: ObservableLike<T>): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_awaitOrObserve](observable, true) as T;
};

export const __constant = <T>(value: T, ...args: unknown[]): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_constant](value, ...args);
};

export const __observe = <T>(observable: ObservableLike<T>): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_awaitOrObserve](observable, false);
};

interface __Do {
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
}

export const __do: __Do["__do"] = /*@__PURE__*/ (() => {
  const deferSideEffect = (
    create: (f: SideEffect1<ObserverLike<unknown>>) => ObservableLike,
    f: (...args: any[]) => void,
    ...args: unknown[]
  ) =>
    create(observer => {
      const callback = () => {
        f(...args);
        observer[SinkLike_notify](none);
        observer[DisposableLike_dispose]();
      };

      pipe(
        observer[SchedulerLike_schedule](callback),
        Disposable_addTo(observer),
      );
    });

  const createRunnable = (onSubscribe: SideEffect1<ObserverLike<unknown>>) =>
    Runnable_create(onSubscribe, {
      [ObservableLike_isPure]: false,
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = ctx[__ComputeContext_observer];
    const observableConfig = ctx[__ComputeContext_observableConfig];
    const observable = ctx[__ComputeContext_memoOrUse](
      false,
      deferSideEffect,
      observableConfig[ObservableLike_isRunnable]
        ? createRunnable
        : Observable_create,
      f,
      ...args,
    );
    const subscribeOnScheduler = ctx[__ComputeContext_memoOrUse](
      false,
      Observable_subscribe,
      scheduler,
    );
    ctx[__ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
  };
})();

interface __Using {
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

export const __using: __Using["__using"] = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_memoOrUse](true, f, ...args);
};

export function __currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_observer];
}

export const __stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <TStreamable extends StreamableLike>(
    streamable: TStreamable,
    scheduler: SchedulerLike,
    replay: Optional<number>,
    capacity: Optional<number>,
    backpressureStrategy: Optional<
      QueueableLike[typeof QueueableLike_backpressureStrategy]
    >,
  ) =>
    streamable[StreamableLike_stream](scheduler, {
      replay,
      backpressureStrategy,
      capacity,
    });

  return <TStreamable extends StreamableLike>(
    streamable: TStreamable,
    {
      replay,
      backpressureStrategy,
      capacity,
      scheduler,
    }: {
      readonly replay?: number;
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): StreamOf<TStreamable> => {
    const currentScheduler = __currentScheduler();
    return __using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      replay,
      capacity,
      backpressureStrategy,
    );
  };
})();

export const __state = /*@__PURE__*/ (() => {
  const createStateOptions = <T>(equality: Optional<Equality<T>>) =>
    isSome(equality) ? { equality } : none;

  return <T>(
    initialState: () => T,
    options: {
      readonly equality?: Optional<Equality<T>>;
      readonly replay?: number;
      readonly scheduler?: SchedulerLike;
      readonly capacity?: number;
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(
      Streamable_createStateStore as <T>(
        initialState: Factory<T>,
        options?: { readonly equality?: Equality<T> },
      ) => StreamableLike<Updater<T>, T>,
      initialState,
      optionsMemo,
    );
    return __stream(streamable, options) as StreamLike<Updater<T>, T>;
  };
})();

// eslint-disable-next-line @typescript-eslint/ban-types
export const __bindMethod = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends { [K in TKey]: (...args: any[]) => any },
  TKey extends number | string | symbol,
  TFunction extends T[TKey],
>(
  thiz: T,
  key: TKey,
): TFunction =>
  __memo<T, TKey, TFunction>(
    bindMethod as (...args: any[]) => TFunction,
    thiz,
    key,
  );
