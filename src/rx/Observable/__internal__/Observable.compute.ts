import {
  __AwaitOrObserveEffect_hasValue,
  __AwaitOrObserveEffect_observable,
  __AwaitOrObserveEffect_subscription,
  __AwaitOrObserveEffect_value,
  __ComputeContext_awaitOrObserve,
  __ComputeContext_cleanup,
  __ComputeContext_constant,
  __ComputeContext_effects,
  __ComputeContext_index,
  __ComputeContext_memoOrUse,
  __ComputeContext_mode,
  __ComputeContext_observableConfig,
  __ComputeContext_observer,
  __ComputeContext_runComputation,
  __ComputeContext_scheduledComputationSubscription,
  __ComputeEffect_type,
  __ConstantEffect_hasValue,
  __ConstantEffect_value,
  __MemoOrUsingEffect_args,
  __MemoOrUsingEffect_func,
  __MemoOrUsingEffect_value,
} from "../../../__internal__/symbols.js";
import {
  Factory,
  Optional,
  arrayEquality,
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
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SchedulerLike_schedule,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type EffectsMode = "batched" | "combine-latest";

const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const Constant = 5;

type ComputeEffectType =
  | typeof Memo
  | typeof Await
  | typeof Observe
  | typeof Using
  | typeof Constant;

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

type ConstantEffect<T = unknown> = {
  readonly [__ComputeEffect_type]: typeof Constant;
  [__ConstantEffect_value]: T;
  [__ConstantEffect_hasValue]: boolean;
};

type ComputeEffect =
  | AwaitEffect
  | ConstantEffect
  | MemoEffect
  | ObserveEffect
  | UsingEffect;

interface ValidateComputeEffect {
  validateComputeEffect(ctx: ComputeContext, type: typeof Await): AwaitEffect;
  validateComputeEffect<T>(
    ctx: ComputeContext,
    type: typeof Constant,
  ): ConstantEffect<T>;
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
        : type === Constant
        ? {
            [__ComputeEffect_type]: type,
            [__ConstantEffect_value]: none,
            [__ConstantEffect_hasValue]: false,
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

const awaiting = /*@__PURE__*/ error();

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

  [__ComputeContext_constant]<T>(value: T): T {
    const effect = validateComputeEffect<T>(this, Constant);
    if (effect[__ConstantEffect_hasValue]) {
      return effect[__ConstantEffect_value];
    } else {
      effect[__ConstantEffect_value] = value;
      effect[__ConstantEffect_hasValue] = true;
      return value;
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
