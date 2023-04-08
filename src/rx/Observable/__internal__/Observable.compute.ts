import {
  __AwaitOrObserveEffect_hasValue,
  __AwaitOrObserveEffect_observable,
  __AwaitOrObserveEffect_subscription,
  __AwaitOrObserveEffect_value,
  __ComputeContext_awaitOrObserve,
  __ComputeContext_cleanup,
  __ComputeContext_effects,
  __ComputeContext_index,
  __ComputeContext_memoOrUse,
  __ComputeContext_mode,
  __ComputeContext_observableConfig,
  __ComputeContext_observer,
  __ComputeContext_runComputation,
  __ComputeContext_scheduledComputationSubscription,
  __ComputeEffect_type,
  __MemoOrUsingEffect_args,
  __MemoOrUsingEffect_func,
  __MemoOrUsingEffect_value,
} from "../../../__internal__/symbols.js";
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
  arrayEquality,
  bind,
  bindMethod,
  error,
  ignore,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  raiseError,
  raiseWithDebugMessage,
} from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import { SchedulerLike, SchedulerLike_schedule } from "../../../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import Streamable_createStateStore from "../../../streaming/Streamable/__internal__/Streamable.createStateStore.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_create from "./Observable.create.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type EffectsMode = "batched" | "combine-latest";

const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;

type ComputeEffectType =
  | typeof Memo
  | typeof Await
  | typeof Observe
  | typeof Using;

type MemoOrUsingEffect<T = unknown> = {
  [__MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [__MemoOrUsingEffect_args]: unknown[];
  [__MemoOrUsingEffect_value]: T;
};

type MemoEffect = {
  readonly [__ComputeEffect_type]: typeof Memo;
} & MemoOrUsingEffect;

type UsingEffect = {
  readonly [__ComputeEffect_type]: typeof Using;
  [__MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [__MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;

type AwaitOrObserveEffect = {
  [__AwaitOrObserveEffect_observable]: ObservableLike;
  [__AwaitOrObserveEffect_subscription]: DisposableLike;
  [__AwaitOrObserveEffect_value]: Optional;
  [__AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
  readonly [__ComputeEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;

type AwaitEffect = {
  readonly [__ComputeEffect_type]: typeof Await;
} & AwaitOrObserveEffect;

type ComputeEffect = AwaitEffect | MemoEffect | ObserveEffect | UsingEffect;

interface ValidateComputeEffect {
  validateComputeEffect(ctx: ComputeContext, type: typeof Await): AwaitEffect;
  validateComputeEffect(ctx: ComputeContext, type: typeof Memo): MemoEffect;
  validateComputeEffect(
    ctx: ComputeContext,
    type: typeof Observe,
  ): ObserveEffect;
  validateComputeEffect(ctx: ComputeContext, type: typeof Using): UsingEffect;
}
const validateComputeEffect: ValidateComputeEffect["validateComputeEffect"] = ((
  ctx: ComputeContext,
  type: ComputeEffectType,
): ComputeEffect => {
  const {
    [__ComputeContext_effects]: effects,
    [__ComputeContext_index]: index,
  } = ctx;
  ctx[__ComputeContext_index]++;

  const effect = effects[index];

  if (isSome(effect) && effect[__ComputeEffect_type] === type) {
    return effect;
  } else {
    if (
      isSome(effect) &&
      (effect[__ComputeEffect_type] === Await ||
        effect[__ComputeEffect_type] === Observe)
    ) {
      effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
    }

    const newEffect: ComputeEffect =
      type === Memo
        ? {
            [__ComputeEffect_type]: type,
            [__MemoOrUsingEffect_func]: ignore,
            [__MemoOrUsingEffect_args]: [],
            [__MemoOrUsingEffect_value]: none,
          }
        : type === Await || type === Observe
        ? {
            [__ComputeEffect_type]: type,
            [__AwaitOrObserveEffect_observable]: Observable_empty(),
            [__AwaitOrObserveEffect_subscription]: Disposable_disposed,
            [__AwaitOrObserveEffect_value]: none,
            [__AwaitOrObserveEffect_hasValue]: false,
          }
        : type === Using
        ? {
            [__ComputeEffect_type]: type,
            [__MemoOrUsingEffect_func]: ignore,
            [__MemoOrUsingEffect_args]: [],
            [__MemoOrUsingEffect_value]: Disposable_disposed,
          }
        : raiseWithDebugMessage("invalid effect type");

    if (isSome(effect)) {
      effects[index] = newEffect;
    } else {
      effects.push(newEffect);
    }
    return newEffect;
  }
}) as ValidateComputeEffect["validateComputeEffect"];

const arrayStrictEquality = arrayEquality();

const awaiting = error();

class ComputeContext {
  [__ComputeContext_index] = 0;
  readonly [__ComputeContext_effects]: ComputeEffect[] = [];
  readonly [__ComputeContext_observableConfig]: {
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };
  readonly [__ComputeContext_observer]: ObserverLike;

  private [__ComputeContext_scheduledComputationSubscription]: DisposableLike =
    Disposable_disposed;
  private readonly [__ComputeContext_runComputation]: () => void;
  private readonly [__ComputeContext_mode]: EffectsMode;
  private readonly [__ComputeContext_cleanup] = () => {
    const { [__ComputeContext_effects]: effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect[__ComputeEffect_type] === Await ||
            effect[__ComputeEffect_type] === Observe) &&
          !effect[__AwaitOrObserveEffect_subscription][
            DisposableLike_isDisposed
          ],
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      this[__ComputeContext_scheduledComputationSubscription][
        DisposableLike_isDisposed
      ]
    ) {
      this[__ComputeContext_observer][DisposableLike_dispose]();
    }
  };

  constructor(
    observer: ObserverLike,
    runComputation: () => void,
    mode: EffectsMode,
    config: {
      readonly [ObservableLike_isEnumerable]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
  ) {
    this[__ComputeContext_observer] = observer;
    this[__ComputeContext_runComputation] = runComputation;
    this[__ComputeContext_mode] = mode;
    this[__ComputeContext_observableConfig] = config;
  }

  [__ComputeContext_awaitOrObserve]<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    if (
      this[__ComputeContext_observableConfig][ObservableLike_isEnumerable] &&
      !observable[ObservableLike_isEnumerable]
    ) {
      raiseWithDebugMessage(
        "cannot observe a non-enumerable observable in an Enumerable computation",
      );
    } else if (
      this[__ComputeContext_observableConfig][ObservableLike_isRunnable] &&
      !observable[ObservableLike_isRunnable]
    ) {
      raiseWithDebugMessage(
        "cannot observe a non-runnable observable in a Runnable computation",
      );
    }

    const effect = shouldAwait
      ? validateComputeEffect(this, Await)
      : validateComputeEffect(this, Observe);

    if (effect[__AwaitOrObserveEffect_observable] === observable) {
      return effect[__AwaitOrObserveEffect_value] as T;
    } else {
      effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();

      const {
        [__ComputeContext_observer]: observer,
        [__ComputeContext_runComputation]: runComputation,
      } = this;

      const subscription = pipe(
        observable,
        Observable_forEach<ObservableLike, T>(next => {
          effect[__AwaitOrObserveEffect_value] = next;
          effect[__AwaitOrObserveEffect_hasValue] = true;

          if (this[__ComputeContext_mode] === "combine-latest") {
            runComputation();
          } else {
            let {
              [__ComputeContext_scheduledComputationSubscription]:
                scheduledComputationSubscription,
            } = this;

            this[__ComputeContext_scheduledComputationSubscription] =
              scheduledComputationSubscription[DisposableLike_isDisposed]
                ? pipe(
                    observer[SchedulerLike_schedule](runComputation),
                    Disposable_addTo(observer),
                  )
                : scheduledComputationSubscription;
          }
        }),
        Observable_subscribeWithConfig(observer, observer),
        Disposable_addTo(observer),
        Disposable_onComplete(this[__ComputeContext_cleanup]),
      );

      effect[__AwaitOrObserveEffect_observable] = observable;
      effect[__AwaitOrObserveEffect_subscription] = subscription;
      effect[__AwaitOrObserveEffect_value] = none;
      effect[__AwaitOrObserveEffect_hasValue] = false;

      return shouldAwait ? raiseError(awaiting) : none;
    }
  }

  [__ComputeContext_memoOrUse]<T>(
    shouldUse: false,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [__ComputeContext_memoOrUse]<T extends DisposableLike>(
    shouldUse: true,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [__ComputeContext_memoOrUse]<T>(
    shouldUse: boolean,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = shouldUse
      ? validateComputeEffect(this, Using)
      : validateComputeEffect(this, Memo);

    if (
      f === effect[__MemoOrUsingEffect_func] &&
      arrayStrictEquality(args, effect[__MemoOrUsingEffect_args])
    ) {
      return effect[__MemoOrUsingEffect_value] as T;
    } else {
      if (shouldUse) {
        (effect[__MemoOrUsingEffect_value] as DisposableLike)[
          DisposableLike_dispose
        ]();
      }

      const value = f(...args);
      effect[__MemoOrUsingEffect_func] = f;
      effect[__MemoOrUsingEffect_args] = args;
      effect[__MemoOrUsingEffect_value] = value;

      if (shouldUse) {
        pipe(
          value as DisposableLike,
          Disposable_addTo(this[__ComputeContext_observer]),
        );
      }

      return value;
    }
  }
}

let currentCtx: Optional<ComputeContext> = none;

export const assertCurrentContext = (): ComputeContext =>
  isNone(currentCtx)
    ? raiseWithDebugMessage(
        "effect must be called within a computational expression",
      )
    : currentCtx;

interface ObservableComputeWithConfig {
  computeWithConfig<T>(
    computation: Factory<T>,
    config: {
      readonly [ObservableLike_isEnumerable]: true;
      readonly [ObservableLike_isRunnable]: true;
    },
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): EnumerableLike<T>;
  computeWithConfig<T>(
    computation: Factory<T>,
    config: {
      readonly [ObservableLike_isEnumerable]: false;
      readonly [ObservableLike_isRunnable]: true;
    },
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): RunnableLike<T>;
  computeWithConfig<T>(
    computation: Factory<T>,
    config: {
      readonly [ObservableLike_isEnumerable]: false;
      readonly [ObservableLike_isRunnable]: false;
    },
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): ObservableLike<T>;
  computeWithConfig<T>(
    computation: Factory<T>,
    config: {
      readonly [ObservableLike_isEnumerable]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): ObservableLike<T>;
}
const Observable_computeWithConfig: ObservableComputeWithConfig["computeWithConfig"] =
  (<T>(
    computation: Factory<T>,
    config: {
      readonly [ObservableLike_isEnumerable]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
    { mode = "batched" }: { readonly mode?: "batched" | "combine-latest" } = {},
  ) =>
    Observable_createWithConfig<T>((observer: ObserverLike<T>) => {
      const runComputation = () => {
        let result: Optional<T> = none;
        let err: Optional<Error> = none;
        let isAwaiting = false;

        currentCtx = ctx;
        try {
          result = computation();
        } catch (e) {
          isAwaiting = e === awaiting;
          if (!isAwaiting) {
            err = error(e);
          }
        }

        const { [__ComputeContext_effects]: effects } = ctx;

        if (ReadonlyArray_getLength(effects) > ctx[__ComputeContext_index]) {
          const effectsLength = effects.length;

          for (let i = ctx[__ComputeContext_index]; i < effectsLength; i++) {
            const effect = ctx[__ComputeContext_effects][i];

            if (
              effect[__ComputeEffect_type] === Await ||
              effect[__ComputeEffect_type] === Observe
            ) {
              effect[__AwaitOrObserveEffect_subscription][
                DisposableLike_dispose
              ]();
            }
          }
        }
        ctx[__ComputeContext_effects].length = ctx[__ComputeContext_index];
        currentCtx = none;
        ctx[__ComputeContext_index] = 0;

        const effectsLength = ReadonlyArray_getLength(effects);

        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
          const effect = effects[i];
          const { [__ComputeEffect_type]: type } = effect;

          if (
            (type === Await || type === Observe) &&
            !(effect as AwaitOrObserveEffect)[__AwaitOrObserveEffect_hasValue]
          ) {
            allObserveEffectsHaveValues = false;
          }

          if (
            (type === Await || type === Observe) &&
            !(effect as ObserveEffect)[__AwaitOrObserveEffect_subscription][
              DisposableLike_isDisposed
            ]
          ) {
            hasOutstandingEffects = true;
          }

          if (!allObserveEffectsHaveValues && hasOutstandingEffects) {
            break;
          }
        }

        const combineLatestModeShouldNotify =
          mode === "combine-latest" &&
          allObserveEffectsHaveValues &&
          hasOutstandingEffects;

        const hasError = isSome(err);

        const shouldNotify =
          !hasError &&
          !isAwaiting &&
          (combineLatestModeShouldNotify || mode === "batched");

        const shouldDispose = !hasOutstandingEffects || hasError;

        if (shouldNotify) {
          observer[ObserverLike_notify](result as T);
        }

        if (shouldDispose) {
          observer[DisposableLike_dispose](err);
        }
      };

      const ctx = newInstance(
        ComputeContext,
        observer,
        runComputation,
        mode,
        config,
      );
      pipe(
        observer[SchedulerLike_schedule](runComputation),
        Disposable_addTo(observer),
      );
    }, config)) as ObservableComputeWithConfig["computeWithConfig"];

export const Observable_compute = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
): ObservableLike<T> =>
  Observable_computeWithConfig(
    computation,
    {
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: false,
    },
    options,
  );

export const Runnable_compute = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
): RunnableLike<T> =>
  Observable_computeWithConfig(
    computation,
    {
      [ObservableLike_isEnumerable]: false,
      [ObservableLike_isRunnable]: true,
    },
    options,
  );

export const Enumerable_compute = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
): EnumerableLike<T> =>
  Observable_computeWithConfig(
    computation,
    {
      [ObservableLike_isEnumerable]: true,
      [ObservableLike_isRunnable]: true,
    },
    options,
  );

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
export const Observable_compute__memo: __Memo["__memo"] = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_memoOrUse](false, f, ...args);
};

export const Observable_compute__await = <T>(
  observable: ObservableLike<T>,
): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_awaitOrObserve](observable, true) as T;
};

export const Observable_compute__observe = <T>(
  observable: ObservableLike<T>,
): Optional<T> => {
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

export const Observable_compute__do: __Do["__do"] = /*@__PURE__*/ (() => {
  const deferSideEffect = (
    create: (f: SideEffect1<ObserverLike<unknown>>) => ObservableLike,
    f: (...args: any[]) => void,
    ...args: unknown[]
  ) =>
    create(observer => {
      const callback = () => {
        f(...args);
        observer[ObserverLike_notify](none);
        observer[DisposableLike_dispose]();
      };

      pipe(
        observer[SchedulerLike_schedule](callback),
        Disposable_addTo(observer),
      );
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = ctx[__ComputeContext_observer];
    const observableConfig = ctx[__ComputeContext_observableConfig];
    const observable = ctx[__ComputeContext_memoOrUse](
      false,
      deferSideEffect,
      observableConfig[ObservableLike_isEnumerable]
        ? Enumerable_create
        : observableConfig[ObservableLike_isRunnable]
        ? Runnable_create
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

export const Observable_compute__using: __Using["__using"] = <
  T extends DisposableLike,
>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_memoOrUse](true, f, ...args);
};

export function Observable_compute__currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return ctx[__ComputeContext_observer];
}

export const Observable_compute__stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <
    TReq,
    T,
    TStream extends StreamLike<TReq, T>,
  >(
    streamable: StreamableLike<TReq, T, TStream>,
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

  return <TReq, T, TStream extends StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
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
  ): TStream => {
    const currentScheduler = Observable_compute__currentScheduler();
    return Observable_compute__using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      replay,
      capacity,
      backpressureStrategy,
    ) as TStream;
  };
})();

export const Observable_compute__state = /*@__PURE__*/ (() => {
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
    const optionsMemo = Observable_compute__memo(createStateOptions, equality);
    const streamable = Observable_compute__memo(
      Streamable_createStateStore,
      initialState,
      optionsMemo,
    );
    return Observable_compute__stream(streamable, options) as StreamLike<
      Updater<T>,
      T
    >;
  };
})();

// eslint-disable-next-line @typescript-eslint/ban-types
export const Observable_compute__bind = <F extends Function>(
  f: F,
  thiz: unknown,
): F => Observable_compute__memo(bind, f, thiz);

// eslint-disable-next-line @typescript-eslint/ban-types
export const Observable_compute__bindMethod = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends { [K in TKey]: (...args: any[]) => any },
  TKey extends number | string | symbol,
  TFunction extends T[TKey],
>(
  thiz: T,
  key: TKey,
): TFunction =>
  Observable_compute__memo<T, TKey, TFunction>(
    bindMethod as (...args: any[]) => TFunction,
    thiz,
    key,
  );
