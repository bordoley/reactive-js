import {
  Array_length,
  Array_push,
  __DEV__,
} from "../../../__internal__/constants.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableWithSideEffectsLike,
  SynchronousObservableWithSideEffectsLike,
} from "../../../computations.js";
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
  raiseIf,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import type * as Observable from "../../Observable.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Observable_genPure } from "./Observable.gen.js";

export const BatchedComputeMode = "batched";
export const CombineLatestComputeMode = "combine-latest";

const m = Computation.makeModule<Observable.Signature, "genPure">({
  genPure: Observable_genPure,
});

type ComputeMode = "batched" | "combine-latest";

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

const AwaitOrObserveEffect_hasValue = Symbol("AwaitOrObserveEffect_hasValue");
const AwaitOrObserveEffect_observable = Symbol(
  "AwaitOrObserveEffect_observable",
);
const AwaitOrObserveEffect_subscription = Symbol(
  "AwaitOrObserveEffect_subscription",
);
const AwaitOrObserveEffect_value = Symbol("AwaitOrObserveEffect_value");
export const ObservableComputeContext_awaitOrObserve = Symbol(
  "ObservableComputeContext_awaitOrObserve",
);
const ObservableComputeContext_cleanup = Symbol(
  "ObservableComputeContext_cleanup",
);
export const ObservableComputeContext_constant = Symbol(
  "ObservableComputeContext_constant",
);
const ObservableComputeContext_effects = Symbol(
  "ObservableComputeContext_effects",
);
const ObservableComputeContext_index = Symbol("ObservableComputeContext_index");
export const ObservableComputeContext_memoOrUse = Symbol(
  "ObservableComputeContext_memoOrUse",
);
const ObservableComputeContext_mode = Symbol("ObservableComputeContext_mode");
export const ObservableComputeContext_observableConfig = Symbol(
  "ObservableComputeContext_observableConfig",
);
export const ObservableComputeContext_observer = Symbol(
  "ObservableComputeContext_observer",
);
const ObservableComputeContext_runComputation = Symbol(
  "ObservableComputeContext_runComputation",
);
const ObservableComputeContext_scheduledComputationSubscription = Symbol(
  "ObservableComputeContext_scheduledComputationSubscription",
);
const ComputeEffect_type = Symbol("ComputeEffect_type");
const ConstantEffect_args = Symbol("ConstantEffect_args");
const ConstantEffect_value = Symbol("ConstantEffect_value");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");

type MemoOrUsingEffect<T = unknown> = {
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
  [MemoOrUsingEffect_value]: T;
};

type MemoEffect = {
  readonly [ComputeEffect_type]: typeof Memo;
} & MemoOrUsingEffect;

type UsingEffect = {
  readonly [ComputeEffect_type]: typeof Using;
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;

type AwaitOrObserveEffect = {
  [AwaitOrObserveEffect_observable]: ObservableLike;
  [AwaitOrObserveEffect_subscription]: DisposableLike;
  [AwaitOrObserveEffect_value]: Optional;
  [AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
  readonly [ComputeEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;

type AwaitEffect = {
  readonly [ComputeEffect_type]: typeof Await;
} & AwaitOrObserveEffect;

type ConstantEffect<T = unknown> = {
  readonly [ComputeEffect_type]: typeof Constant;
  [ConstantEffect_value]: T;
  [ConstantEffect_args]: unknown[];
};

type ComputeEffect =
  | AwaitEffect
  | ConstantEffect
  | MemoEffect
  | ObserveEffect
  | UsingEffect;

interface ValidateComputeEffect {
  validateComputeEffect(
    ctx: ObservableComputeContext,
    type: typeof Await,
  ): AwaitEffect;
  validateComputeEffect<T>(
    ctx: ObservableComputeContext,
    type: typeof Constant,
  ): ConstantEffect<T>;
  validateComputeEffect(
    ctx: ObservableComputeContext,
    type: typeof Memo,
  ): MemoEffect;
  validateComputeEffect(
    ctx: ObservableComputeContext,
    type: typeof Observe,
  ): ObserveEffect;
  validateComputeEffect(
    ctx: ObservableComputeContext,
    type: typeof Using,
  ): UsingEffect;
}
const validateComputeEffect: ValidateComputeEffect["validateComputeEffect"] = ((
  ctx: ObservableComputeContext,
  type: ComputeEffectType,
): ComputeEffect => {
  const effects = ctx[ObservableComputeContext_effects];
  const index = ctx[ObservableComputeContext_index];
  const effect: Optional<ComputeEffect> = effects[index];
  const newEffect: ComputeEffect =
    isSome(effect) && effect[ComputeEffect_type] === type
      ? effect
      : type === Memo
        ? {
            [ComputeEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: none,
          }
        : type === Await || type === Observe
          ? {
              [ComputeEffect_type]: type,
              [AwaitOrObserveEffect_observable]: Computation.empty(m),
              [AwaitOrObserveEffect_subscription]: Disposable.disposed,
              [AwaitOrObserveEffect_value]: none,
              [AwaitOrObserveEffect_hasValue]: false,
            }
          : type === Using
            ? {
                [ComputeEffect_type]: type,
                [MemoOrUsingEffect_func]: ignore,
                [MemoOrUsingEffect_args]: [],
                [MemoOrUsingEffect_value]: Disposable.disposed,
              }
            : {
                [ComputeEffect_type]: type,
                [ConstantEffect_value]: none,
                [ConstantEffect_args]: [],
              };

  ctx[ObservableComputeContext_index]++;

  if (isSome(effect) && newEffect !== effect) {
    if (
      effect[ComputeEffect_type] === Await ||
      effect[ComputeEffect_type] === Observe
    ) {
      effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
    }

    effects[index] = newEffect;
  } else if (isNone(effect)) {
    effects[Array_push](newEffect);
  }

  return newEffect;
}) as ValidateComputeEffect["validateComputeEffect"];

const arrayStrictEquality = arrayEquality();

const awaiting = /*@__PURE__*/ error();

class ObservableComputeContext {
  [ObservableComputeContext_index] = 0;
  readonly [ObservableComputeContext_effects]: ComputeEffect[] = [];
  readonly [ObservableComputeContext_observableConfig]: {
    readonly [ComputationLike_isDeferred]?: boolean;
    readonly [ComputationLike_isSynchronous]?: boolean;
  };
  readonly [ObservableComputeContext_observer]: ObserverLike;

  private [ObservableComputeContext_scheduledComputationSubscription]: DisposableLike =
    Disposable.disposed;
  private readonly [ObservableComputeContext_runComputation]: () => void;
  private readonly [ObservableComputeContext_mode]: ComputeMode;
  private readonly [ObservableComputeContext_cleanup] = () => {
    const effects = this[ObservableComputeContext_effects];

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
          !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed],
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      this[ObservableComputeContext_scheduledComputationSubscription][
        DisposableLike_isDisposed
      ]
    ) {
      this[ObservableComputeContext_observer][SinkLike_complete]();
    }
  };

  constructor(
    observer: ObserverLike,
    runComputation: () => void,
    mode: ComputeMode,
    config: Pick<
      ObservableLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ) {
    this[ObservableComputeContext_observer] = observer;
    this[ObservableComputeContext_runComputation] = runComputation;
    this[ObservableComputeContext_mode] = mode;
    this[ObservableComputeContext_observableConfig] = config;
  }

  [ObservableComputeContext_awaitOrObserve]<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    if (__DEV__) {
      raiseIf(
        (this[ObservableComputeContext_observableConfig][
          ComputationLike_isSynchronous
        ] ??
          true) &&
          !observable[ComputationLike_isSynchronous],
        "cannot observe a non-runnable observable in a SynchronousObservable computation",
      );
    }

    const effect = shouldAwait
      ? validateComputeEffect(this, Await)
      : validateComputeEffect(this, Observe);

    const observer = this[ObservableComputeContext_observer];
    const runComputation = this[ObservableComputeContext_runComputation];

    if (effect[AwaitOrObserveEffect_observable] === observable) {
      return effect[AwaitOrObserveEffect_value] as Optional<T>;
    } else {
      effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
      effect[AwaitOrObserveEffect_observable] = observable;
      effect[AwaitOrObserveEffect_value] = none;
      effect[AwaitOrObserveEffect_hasValue] = false;

      effect[AwaitOrObserveEffect_subscription] = pipe(
        observable,
        EventSource.subscribe(
          (next: T) => {
            effect[AwaitOrObserveEffect_value] = next;
            effect[AwaitOrObserveEffect_hasValue] = true;

            if (
              this[ObservableComputeContext_mode] === CombineLatestComputeMode
            ) {
              runComputation();
            } else {
              const scheduledComputationSubscription =
                this[ObservableComputeContext_scheduledComputationSubscription];

              this[ObservableComputeContext_scheduledComputationSubscription] =
                scheduledComputationSubscription[DisposableLike_isDisposed]
                  ? pipe(
                      observer[SchedulerLike_schedule](function* () {
                        runComputation();
                      }),
                      Disposable.addTo(observer),
                    )
                  : scheduledComputationSubscription;
            }
          },
          { scheduler: observer },
        ),
        Disposable.addTo(observer),
        DisposableContainer.onComplete(this[ObservableComputeContext_cleanup]),
      );

      return shouldAwait ? raiseError(awaiting) : none;
    }
  }

  [ObservableComputeContext_constant]<T>(value: T, ...args: unknown[]): T {
    const effect = validateComputeEffect<T>(this, Constant);
    if (
      isSome(effect[ConstantEffect_value]) &&
      arrayStrictEquality(args, effect[ConstantEffect_args])
    ) {
      return effect[ConstantEffect_value];
    } else {
      effect[ConstantEffect_value] = value;
      effect[ConstantEffect_args] = args;
      return value;
    }
  }

  [ObservableComputeContext_memoOrUse]<T>(
    shouldUse: false,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [ObservableComputeContext_memoOrUse]<T extends DisposableLike>(
    shouldUse: true,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [ObservableComputeContext_memoOrUse]<T>(
    shouldUse: boolean,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = shouldUse
      ? validateComputeEffect(this, Using)
      : validateComputeEffect(this, Memo);

    if (
      f === effect[MemoOrUsingEffect_func] &&
      arrayStrictEquality(args, effect[MemoOrUsingEffect_args])
    ) {
      return effect[MemoOrUsingEffect_value] as T;
    } else {
      if (shouldUse) {
        (effect[MemoOrUsingEffect_value] as DisposableLike)[
          DisposableLike_dispose
        ]();
      }

      const value = f(...args);
      effect[MemoOrUsingEffect_func] = f;
      effect[MemoOrUsingEffect_args] = args;
      effect[MemoOrUsingEffect_value] = value;

      if (shouldUse) {
        pipe(
          value as DisposableLike,
          Disposable.addTo(this[ObservableComputeContext_observer]),
        );
      }

      return value;
    }
  }
}

let currentCtx: Optional<ObservableComputeContext> = none;

export const assertCurrentContext = (): ObservableComputeContext => {
  if (__DEV__) {
    raiseIf(
      isNone(currentCtx),
      "effect must be called within a computational expression",
    );
  }

  return currentCtx as ObservableComputeContext;
};

interface Signature {
  compute<T>(
    computation: Factory<T>,
    config: Pick<
      SynchronousObservableWithSideEffectsLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
    options?: { readonly mode?: ComputeMode },
  ): SynchronousObservableWithSideEffectsLike<T>;
  compute<T>(
    computation: Factory<T>,
    config: Pick<
      ObservableWithSideEffectsLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
    options?: { readonly mode?: ComputeMode },
  ): ObservableWithSideEffectsLike<T>;
}

const Observable_compute: Signature["compute"] = (<T>(
  computation: Factory<T>,
  config: Pick<
    ObservableWithSideEffectsLike,
    typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
  >,
  { mode = BatchedComputeMode }: { readonly mode?: ComputeMode } = {},
) =>
  DeferredEventSource.create<T, ObserverLike<T>>(
    (observer: ObserverLike<T>) => {
      const runComputation = () => {
        let result: Optional<T> = none;
        let err: Optional<Error> = none;
        let isAwaiting = false;

        currentCtx = ctx;
        try {
          // Explicitly reset the count before running the computation
          // for the combine-latest case where runComputation can
          // be invoked recursively on itself.
          ctx[ObservableComputeContext_index] = 0;
          result = computation();
        } catch (e) {
          isAwaiting = e === awaiting;
          if (!isAwaiting) {
            err = error(e);
          }
        }

        const effects = ctx[ObservableComputeContext_effects];

        if (effects[Array_length] > ctx[ObservableComputeContext_index]) {
          const effectsLength = effects[Array_length];

          for (
            let i = ctx[ObservableComputeContext_index];
            i < effectsLength;
            i++
          ) {
            const effect = ctx[ObservableComputeContext_effects][i];

            if (
              effect[ComputeEffect_type] === Await ||
              effect[ComputeEffect_type] === Observe
            ) {
              effect[AwaitOrObserveEffect_subscription][
                DisposableLike_dispose
              ]();
            }
          }
        }
        ctx[ObservableComputeContext_effects][Array_length] =
          ctx[ObservableComputeContext_index];
        currentCtx = none;
        ctx[ObservableComputeContext_index] = 0;

        const effectsLength = effects[Array_length];

        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
          const effect = effects[i];
          const type = effect[ComputeEffect_type];

          if (
            (type === Await || type === Observe) &&
            !(effect as AwaitOrObserveEffect)[AwaitOrObserveEffect_hasValue]
          ) {
            allObserveEffectsHaveValues = false;
          }

          if (
            (type === Await || type === Observe) &&
            !(effect as ObserveEffect)[AwaitOrObserveEffect_subscription][
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
          mode === CombineLatestComputeMode && allObserveEffectsHaveValues;

        const hasError = isSome(err);

        const shouldNotify =
          !hasError &&
          !isAwaiting &&
          (combineLatestModeShouldNotify || mode === BatchedComputeMode);

        const shouldComplete = !hasOutstandingEffects;

        if (hasError) {
          observer[DisposableLike_dispose](err);
          return;
        }

        if (shouldNotify) {
          observer[EventListenerLike_notify](result as T);
        }

        if (shouldComplete) {
          observer[SinkLike_complete]();
        }
      };

      const ctx = newInstance(
        ObservableComputeContext,
        observer,
        runComputation,
        mode,
        config,
      );
      pipe(
        observer[SchedulerLike_schedule](function* () {
          runComputation();
        }),
        Disposable.addTo(observer),
      );
    },
    config,
  )) as Signature["compute"];

export const Observable_computeDeferred: Observable.Signature["compute"] = <T>(
  computation: Factory<T>,
  options: { mode?: "batched" | "combine-latest" } = {},
) =>
  Observable_compute<T>(
    computation,
    {
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    },
    options,
  );

export const Observable_computeSynchronous: SynchronousObservable.Signature["compute"] =
  <T>(
    computation: Factory<T>,
    options: { mode?: "batched" | "combine-latest" } = {},
  ) =>
    Observable_compute(
      computation,
      {
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: true,
      },
      options,
    );
