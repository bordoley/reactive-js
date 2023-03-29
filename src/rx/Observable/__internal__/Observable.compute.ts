import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  AwaitOrObserveEffect_hasValue,
  AwaitOrObserveEffect_observable,
  AwaitOrObserveEffect_subscription,
  AwaitOrObserveEffect_value,
  ComputeContext_awaitOrObserve,
  ComputeContext_cleanup,
  ComputeContext_effects,
  ComputeContext_index,
  ComputeContext_memoOrUse,
  ComputeContext_mode,
  ComputeContext_observer,
  ComputeContext_runComputation,
  ComputeContext_scheduledComputationSubscription,
  ComputeEffect_type,
  MemoOrUsingEffect_args,
  MemoOrUsingEffect_func,
  MemoOrUsingEffect_value,
} from "../../../__internal__/symbols.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import {
  Equality,
  Factory,
  Optional,
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
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
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
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observable_create from "./Observable.create.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_subscribeWithDispatcherConfig from "./Observable.subscribeWithDispatcherConfig.js";

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

type ComputeEffect = AwaitEffect | MemoEffect | ObserveEffect | UsingEffect;

interface ValidateComputeEffect {
  (ctx: ComputeContext, type: typeof Await): AwaitEffect;
  (ctx: ComputeContext, type: typeof Memo): MemoEffect;
  (ctx: ComputeContext, type: typeof Observe): ObserveEffect;
  (ctx: ComputeContext, type: typeof Using): UsingEffect;
}
const validateComputeEffect: ValidateComputeEffect = ((
  ctx: ComputeContext,
  type: ComputeEffectType,
): ComputeEffect => {
  const { [ComputeContext_effects]: effects, [ComputeContext_index]: index } =
    ctx;
  ctx[ComputeContext_index]++;

  const effect = effects[index];

  if (isSome(effect) && effect[ComputeEffect_type] === type) {
    return effect;
  } else {
    if (
      isSome(effect) &&
      (effect[ComputeEffect_type] === Await ||
        effect[ComputeEffect_type] === Observe)
    ) {
      effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
    }

    const newEffect: ComputeEffect =
      type === Memo
        ? {
            [ComputeEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: none,
          }
        : type === Await || type === Observe
        ? {
            [ComputeEffect_type]: type,
            [AwaitOrObserveEffect_observable]: Observable_empty(),
            [AwaitOrObserveEffect_subscription]: Disposable_disposed,
            [AwaitOrObserveEffect_value]: none,
            [AwaitOrObserveEffect_hasValue]: false,
          }
        : type === Using
        ? {
            [ComputeEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: Disposable_disposed,
          }
        : raiseWithDebugMessage("invalid effect type");

    if (isSome(effect)) {
      effects[index] = newEffect;
    } else {
      effects.push(newEffect);
    }
    return newEffect;
  }
}) as ValidateComputeEffect;

const arrayStrictEquality = arrayEquality();

const awaiting = error();

class ComputeContext {
  [ComputeContext_index] = 0;
  readonly [ComputeContext_effects]: ComputeEffect[] = [];
  readonly [ComputeContext_observer]: ObserverLike;

  private [ComputeContext_scheduledComputationSubscription]: DisposableLike =
    Disposable_disposed;
  private readonly [ComputeContext_runComputation]: () => void;
  private readonly [ComputeContext_mode]: EffectsMode;
  private readonly [ComputeContext_cleanup] = () => {
    const { [ComputeContext_effects]: effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
          !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed],
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      this[ComputeContext_scheduledComputationSubscription][
        DisposableLike_isDisposed
      ]
    ) {
      this[ComputeContext_observer][DisposableLike_dispose]();
    }
  };

  constructor(
    observer: ObserverLike,
    runComputation: () => void,
    mode: EffectsMode,
  ) {
    this[ComputeContext_observer] = observer;
    this[ComputeContext_runComputation] = runComputation;
    this[ComputeContext_mode] = mode;
  }

  [ComputeContext_awaitOrObserve]<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    const effect = shouldAwait
      ? validateComputeEffect(this, Await)
      : validateComputeEffect(this, Observe);

    if (effect[AwaitOrObserveEffect_observable] === observable) {
      return effect[AwaitOrObserveEffect_value] as T;
    } else {
      effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();

      const {
        [ComputeContext_observer]: observer,
        [ComputeContext_runComputation]: runComputation,
      } = this;

      const subscription = pipe(
        observable,
        Observable_forEach<ObservableLike, T>(next => {
          effect[AwaitOrObserveEffect_value] = next;
          effect[AwaitOrObserveEffect_hasValue] = true;

          if (this[ComputeContext_mode] === "combine-latest") {
            runComputation();
          } else {
            let {
              [ComputeContext_scheduledComputationSubscription]:
                scheduledComputationSubscription,
            } = this;

            this[ComputeContext_scheduledComputationSubscription] =
              scheduledComputationSubscription[DisposableLike_isDisposed]
                ? pipe(observer, Observer_schedule(runComputation))
                : scheduledComputationSubscription;
          }
        }),
        Observable_subscribeWithDispatcherConfig(observer),
        Disposable_addTo(observer),
        Disposable_onComplete(this[ComputeContext_cleanup]),
      );

      effect[AwaitOrObserveEffect_observable] = observable;
      effect[AwaitOrObserveEffect_subscription] = subscription;
      effect[AwaitOrObserveEffect_value] = none;
      effect[AwaitOrObserveEffect_hasValue] = false;

      return shouldAwait ? raiseError(awaiting) : none;
    }
  }

  [ComputeContext_memoOrUse]<T>(
    shouldUse: false,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [ComputeContext_memoOrUse]<T extends DisposableLike>(
    shouldUse: true,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [ComputeContext_memoOrUse]<T>(
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
          Disposable_addTo(this[ComputeContext_observer]),
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

export const Observable_compute = <T>(
  computation: Factory<T>,
  { mode = "batched" }: { mode?: "batched" | "combine-latest" } = {},
): ObservableLike<T> =>
  Observable_create((observer: ObserverLike<T>) => {
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

      const { [ComputeContext_effects]: effects } = ctx;

      if (ReadonlyArray_getLength(effects) > ctx[ComputeContext_index]) {
        const effectsLength = effects.length;

        for (let i = ctx[ComputeContext_index]; i < effectsLength; i++) {
          const effect = ctx[ComputeContext_effects][i];

          if (
            effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe
          ) {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
          }
        }
      }
      ctx[ComputeContext_effects].length = ctx[ComputeContext_index];
      currentCtx = none;
      ctx[ComputeContext_index] = 0;

      const effectsLength = ReadonlyArray_getLength(effects);

      // Inline this for perf
      let allObserveEffectsHaveValues = true;
      let hasOutstandingEffects = false;
      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        const { [ComputeEffect_type]: type } = effect;

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

    const ctx = newInstance(ComputeContext, observer, runComputation, mode);

    pipe(observer, Observer_schedule(runComputation));
  });

export const Observable_compute__memo = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_memoOrUse](false, f, ...args);
};

export const Observable_compute__await = <T>(
  observable: ObservableLike<T>,
): T => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_awaitOrObserve](observable, true) as T;
};

export const Observable_compute__observe = <T>(
  observable: ObservableLike<T>,
): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_awaitOrObserve](observable, false);
};

export const Observable_compute__do = /*@__PURE__*/ (() => {
  const deferSideEffect = (f: (...args: any[]) => void, ...args: unknown[]) =>
    Observable_create(observer => {
      const callback = () => {
        f(...args);
        observer[ObserverLike_notify](none);
        observer[DisposableLike_dispose]();
      };

      pipe(observer, Observer_schedule(callback));
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = ctx[ComputeContext_observer][DispatcherLike_scheduler];
    const observable = ctx[ComputeContext_memoOrUse](
      false,
      deferSideEffect,
      f,
      ...args,
    );
    const subscribeOnScheduler = ctx[ComputeContext_memoOrUse](
      false,
      Observable_subscribe,
      scheduler,
    );
    ctx[ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
  };
})();

export const Observable_compute__using = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_memoOrUse](true, f, ...args);
};

export function Observable_compute__currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return ctx[ComputeContext_observer][DispatcherLike_scheduler];
}

export const Observable_compute__stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <
    TReq,
    T,
    TStream extends StreamLike<TReq, T>,
  >(
    streamable: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    replay: number,
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) =>
    streamable[StreamableLike_stream](scheduler, {
      replay,
      backpressureStrategy,
      capacity,
    });

  return <TReq, T, TStream extends StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
    {
      replay = 0,
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
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
  T extends { [K in TKey]: Function },
  TKey extends number | string | symbol,
  TFunction extends T[TKey],
>(
  thiz: T,
  key: TKey,
): TFunction => Observable_compute__memo(bindMethod, thiz, key);
