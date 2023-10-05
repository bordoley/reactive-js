import {
  CollectionLike_count,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import * as IndexedCollection from "../../../collections/IndexedCollection.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ReplayObservableLike_buffer,
  RunnableWithSideEffectsLike,
  SchedulerLike_schedule,
} from "../../../concurrent.js";
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
import { SinkLike_notify } from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isReplayObservable from "./Observable.isReplayObservable.js";
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

const __AwaitOrObserveEffect_hasValue = Symbol(
  "__AwaitOrObserveEffect_hasValue",
);
const __AwaitOrObserveEffect_observable = Symbol(
  "__AwaitOrObserveEffect_observable",
);
const __AwaitOrObserveEffect_subscription = Symbol(
  "__AwaitOrObserveEffect_subscription",
);
const __AwaitOrObserveEffect_value = Symbol("__AwaitOrObserveEffect_value");
const __ComputeContext_awaitOrObserve = Symbol(
  "__ComputeContext_awaitOrObserve",
);
const __ComputeContext_cleanup = Symbol("__ComputeContext_cleanup");
const __ComputeContext_constant = Symbol("__ComputeContext_constant");
const __ComputeContext_effects = Symbol("__ComputeContext_effects");
const __ComputeContext_index = Symbol("__ComputeContext_index");
const __ComputeContext_memoOrUse = Symbol("__ComputeContext_memoOrUse");
const __ComputeContext_mode = Symbol("__ComputeContext_mode");
const __ComputeContext_observableConfig = Symbol(
  "__ComputeContext_observableConfig",
);
const __ComputeContext_observer = Symbol("__ComputeContext_observer");
const __ComputeContext_runComputation = Symbol(
  "__ComputeContext_runComputation",
);
const __ComputeContext_scheduledComputationSubscription = Symbol(
  "__ComputeContext_scheduledComputationSubscription",
);
const __ComputeEffect_type = Symbol("__ComputeEffect_type");
const __ConstantEffect_args = Symbol("__ConstantEffect_args");
const __ConstantEffect_value = Symbol("__ConstantEffect_value");
const __MemoOrUsingEffect_args = Symbol("__MemoOrUsingEffect_args");
const __MemoOrUsingEffect_func = Symbol("__MemoOrUsingEffect_func");
const __MemoOrUsingEffect_value = Symbol("__MemoOrUsingEffect_value");

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
  [__ConstantEffect_args]: unknown[];
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
            [__AwaitOrObserveEffect_subscription]: Disposable.disposed,
            [__AwaitOrObserveEffect_value]: none,
            [__AwaitOrObserveEffect_hasValue]: false,
          }
        : type === Using
        ? {
            [__ComputeEffect_type]: type,
            [__MemoOrUsingEffect_func]: ignore,
            [__MemoOrUsingEffect_args]: [],
            [__MemoOrUsingEffect_value]: Disposable.disposed,
          }
        : type === Constant
        ? {
            [__ComputeEffect_type]: type,
            [__ConstantEffect_value]: none,
            [__ConstantEffect_args]: [],
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
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };
  readonly [__ComputeContext_observer]: ObserverLike;

  private [__ComputeContext_scheduledComputationSubscription]: DisposableLike =
    Disposable.disposed;
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
    config: Pick<
      ObservableLike,
      typeof ObservableLike_isDeferred | typeof ObservableLike_isRunnable
    >,
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
      return effect[__AwaitOrObserveEffect_value] as Optional<T>;
    } else {
      effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();

      const {
        [__ComputeContext_observer]: observer,
        [__ComputeContext_runComputation]: runComputation,
      } = this;

      const subscription = pipe(
        observable,
        Observable_forEach((next: T) => {
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
                    Disposable.addTo(observer),
                  )
                : scheduledComputationSubscription;
          }
        }),
        Observable_subscribeWithConfig(observer, observer),
        Disposable.addTo(observer),
        Disposable.onComplete(this[__ComputeContext_cleanup]),
      );

      const buffer = Observable_isReplayObservable<T>(observable)
        ? observable[ReplayObservableLike_buffer]
        : IndexedCollection.empty<T>();
      const hasDefaultValue = buffer[CollectionLike_count] > 0;
      const defaultValue = hasDefaultValue
        ? buffer[KeyedCollectionLike_get](0)
        : none;

      effect[__AwaitOrObserveEffect_observable] = observable;
      effect[__AwaitOrObserveEffect_subscription] = subscription;
      effect[__AwaitOrObserveEffect_value] = defaultValue;
      effect[__AwaitOrObserveEffect_hasValue] = hasDefaultValue;

      return shouldAwait && !hasDefaultValue
        ? raiseError(awaiting)
        : defaultValue;
    }
  }

  [__ComputeContext_constant]<T>(value: T, ...args: unknown[]): T {
    const effect = validateComputeEffect<T>(this, Constant);
    if (
      isSome(effect[__ConstantEffect_value]) &&
      arrayStrictEquality(args, effect[__ConstantEffect_args])
    ) {
      return effect[__ConstantEffect_value];
    } else {
      effect[__ConstantEffect_value] = value;
      effect[__ConstantEffect_args] = args;
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
          Disposable.addTo(this[__ComputeContext_observer]),
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
    config: Pick<
      RunnableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): RunnableWithSideEffectsLike<T>;
  computeWithConfig<T>(
    computation: Factory<T>,
    config: Pick<
      DeferredObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
    options?: { readonly mode?: "batched" | "combine-latest" },
  ): DeferredObservableLike<T>;
}

const Observable_computeWithConfig: ObservableComputeWithConfig["computeWithConfig"] =
  (<T>(
    computation: Factory<T>,
    config: Pick<
      DeferredObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
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

        if (effects.length > ctx[__ComputeContext_index]) {
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

        const effectsLength = effects.length;

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
          observer[SinkLike_notify](result as T);
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
        Disposable.addTo(observer),
      );
    }, config)) as ObservableComputeWithConfig["computeWithConfig"];

export default Observable_computeWithConfig;
