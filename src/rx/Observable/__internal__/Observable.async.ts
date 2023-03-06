import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import {
  Equality,
  Factory,
  Optional,
  Updater,
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
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import Streamable_createStateStore from "../../../streaming/Streamable/__internal__/Streamable.createStateStore.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import { DisposableLike, DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_notify from "../../Observer/__internal__/Observer.notify.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observable_create from "./Observable.create.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

type EffectsMode = "batched" | "combine-latest";

const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;

type AsyncEffectType =
  | typeof Memo
  | typeof Await
  | typeof Observe
  | typeof Using;

const AsyncEffect_type = Symbol("AsyncEffect_type");

const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");

type MemoOrUsingEffect<T = unknown> = {
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
  [MemoOrUsingEffect_value]: T;
};

type MemoEffect = {
  readonly [AsyncEffect_type]: typeof Memo;
} & MemoOrUsingEffect;

type UsingEffect = {
  readonly [AsyncEffect_type]: typeof Using;
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;

const AwaitOrObserveEffect_observable = Symbol(
  "AwaitOrObserveEffect_observable",
);
const AwaitOrObserveEffect_subscription = Symbol(
  "AwaitOrObserveEffect_subscription",
);
const AwaitOrObserveEffect_value = Symbol("AwaitOrObserveEffect_value");
const AwaitOrObserveEffect_hasValue = Symbol("AwaitOrObserveEffect_hasValue");
type AwaitOrObserveEffect = {
  [AwaitOrObserveEffect_observable]: ObservableLike;
  [AwaitOrObserveEffect_subscription]: DisposableLike;
  [AwaitOrObserveEffect_value]: Optional;
  [AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
  readonly [AsyncEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;

type AwaitEffect = {
  readonly [AsyncEffect_type]: typeof Await;
} & AwaitOrObserveEffect;

type AsyncEffect = AwaitEffect | MemoEffect | ObserveEffect | UsingEffect;

interface ValidateAsyncEffect {
  (ctx: AsyncContext, type: typeof Await): AwaitEffect;
  (ctx: AsyncContext, type: typeof Memo): MemoEffect;
  (ctx: AsyncContext, type: typeof Observe): ObserveEffect;
  (ctx: AsyncContext, type: typeof Using): UsingEffect;
}
const validateAsyncEffect: ValidateAsyncEffect = ((
  ctx: AsyncContext,
  type: AsyncEffectType,
): AsyncEffect => {
  const { [AsyncContext_effects]: effects, [AsyncContext_index]: index } = ctx;
  ctx[AsyncContext_index]++;

  const effect = effects[index];

  if (isSome(effect) && effect[AsyncEffect_type] === type) {
    return effect;
  } else {
    if (
      isSome(effect) &&
      (effect[AsyncEffect_type] === Await ||
        effect[AsyncEffect_type] === Observe)
    ) {
      pipe(effect[AwaitOrObserveEffect_subscription], Disposable_dispose());
    }

    const newEffect: AsyncEffect =
      type === Memo
        ? {
            [AsyncEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: none,
          }
        : type === Await || type === Observe
        ? {
            [AsyncEffect_type]: type,
            [AwaitOrObserveEffect_observable]: Observable_empty(),
            [AwaitOrObserveEffect_subscription]: Disposable_disposed,
            [AwaitOrObserveEffect_value]: none,
            [AwaitOrObserveEffect_hasValue]: false,
          }
        : type === Using
        ? {
            [AsyncEffect_type]: type,
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
}) as ValidateAsyncEffect;

const arrayStrictEquality = arrayEquality();

const awaiting = error();

const AsyncContext_index = Symbol("AsyncContext_index");
const AsyncContext_cleanup = Symbol("AsyncContext_cleanup");
const AsyncContext_effects = Symbol("AsyncContext_effects");
const AsyncContext_mode = Symbol("AsyncContext_mode");
export const AsyncContext_observer = Symbol("AsyncContext_observer");
const AsyncContext_runComputation = Symbol("AsyncContext_runComputation");
const AsyncContext_scheduledComputationSubscription = Symbol(
  "AsyncContext_scheduledComputationSubscription",
);
export const AsyncContext_awaitOrObserve = Symbol(
  "AsyncContext_awaitOrObserve",
);
export const AsyncContext_memoOrUse = Symbol("AsyncContext_memoOrUse");

class AsyncContext {
  [AsyncContext_index] = 0;
  readonly [AsyncContext_effects]: AsyncEffect[] = [];
  readonly [AsyncContext_observer]: ObserverLike;

  private [AsyncContext_scheduledComputationSubscription]: DisposableLike =
    Disposable_disposed;
  private readonly [AsyncContext_runComputation]: () => void;
  private readonly [AsyncContext_mode]: EffectsMode;
  private readonly [AsyncContext_cleanup] = () => {
    const { [AsyncContext_effects]: effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect[AsyncEffect_type] === Await ||
            effect[AsyncEffect_type] === Observe) &&
          !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed],
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      this[AsyncContext_scheduledComputationSubscription][
        DisposableLike_isDisposed
      ]
    ) {
      pipe(this[AsyncContext_observer], Disposable_dispose());
    }
  };

  constructor(
    observer: ObserverLike,
    runComputation: () => void,
    mode: EffectsMode,
  ) {
    this[AsyncContext_observer] = observer;
    this[AsyncContext_runComputation] = runComputation;
    this[AsyncContext_mode] = mode;
  }

  [AsyncContext_awaitOrObserve]<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    const effect = shouldAwait
      ? validateAsyncEffect(this, Await)
      : validateAsyncEffect(this, Observe);

    if (effect[AwaitOrObserveEffect_observable] === observable) {
      return effect[AwaitOrObserveEffect_value] as T;
    } else {
      pipe(effect[AwaitOrObserveEffect_subscription], Disposable_dispose());

      const {
        [AsyncContext_observer]: observer,
        [AsyncContext_runComputation]: runComputation,
      } = this;
      const scheduler = observer[ObserverLike_scheduler];

      const subscription = pipe(
        observable,
        Observable_forEach<ObservableLike, T>(next => {
          effect[AwaitOrObserveEffect_value] = next;
          effect[AwaitOrObserveEffect_hasValue] = true;

          if (this[AsyncContext_mode] === "combine-latest") {
            runComputation();
          } else {
            let {
              [AsyncContext_scheduledComputationSubscription]:
                scheduledComputationSubscription,
            } = this;

            this[AsyncContext_scheduledComputationSubscription] =
              scheduledComputationSubscription[DisposableLike_isDisposed]
                ? pipe(observer, Observer_schedule(runComputation))
                : scheduledComputationSubscription;
          }
        }),
        Observable_subscribe(scheduler),
        Disposable_addTo(observer),
        Disposable_onComplete(this[AsyncContext_cleanup]),
      );

      effect[AwaitOrObserveEffect_observable] = observable;
      effect[AwaitOrObserveEffect_subscription] = subscription;
      effect[AwaitOrObserveEffect_value] = none;
      effect[AwaitOrObserveEffect_hasValue] = false;

      return shouldAwait ? raiseError(awaiting) : none;
    }
  }

  [AsyncContext_memoOrUse]<T>(
    shouldUse: false,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [AsyncContext_memoOrUse]<T extends DisposableLike>(
    shouldUse: true,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [AsyncContext_memoOrUse]<T>(
    shouldUse: boolean,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = shouldUse
      ? validateAsyncEffect(this, Using)
      : validateAsyncEffect(this, Memo);

    if (
      f === effect[MemoOrUsingEffect_func] &&
      arrayStrictEquality(args, effect[MemoOrUsingEffect_args])
    ) {
      return effect[MemoOrUsingEffect_value] as T;
    } else {
      if (shouldUse) {
        pipe(
          effect[MemoOrUsingEffect_value] as DisposableLike,
          Disposable_dispose(),
        );
      }

      const value = f(...args);
      effect[MemoOrUsingEffect_func] = f;
      effect[MemoOrUsingEffect_args] = args;
      effect[MemoOrUsingEffect_value] = value;

      if (shouldUse) {
        pipe(
          value as DisposableLike,
          Disposable_addTo(this[AsyncContext_observer]),
        );
      }

      return value;
    }
  }
}

let currentCtx: Optional<AsyncContext> = none;

export const assertCurrentContext = (): AsyncContext =>
  isNone(currentCtx)
    ? raiseWithDebugMessage(
        "effect must be called within a computational expression",
      )
    : currentCtx;

export const Observable_async = <T>(
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

      const { [AsyncContext_effects]: effects } = ctx;

      if (ReadonlyArray_getLength(effects) > ctx[AsyncContext_index]) {
        const effectsLength = effects.length;

        for (let i = ctx[AsyncContext_index]; i < effectsLength; i++) {
          const effect = ctx[AsyncContext_effects][i];

          if (
            effect[AsyncEffect_type] === Await ||
            effect[AsyncEffect_type] === Observe
          ) {
            pipe(
              effect[AwaitOrObserveEffect_subscription],
              Disposable_dispose(),
            );
          }
        }
      }
      ctx[AsyncContext_effects].length = ctx[AsyncContext_index];
      currentCtx = none;
      ctx[AsyncContext_index] = 0;

      const effectsLength = ReadonlyArray_getLength(effects);

      // Inline this for perf
      let allObserveEffectsHaveValues = true;
      let hasOutstandingEffects = false;
      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        const { [AsyncEffect_type]: type } = effect;

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
        pipe(observer, Observer_notify(result as T));
      }

      if (shouldDispose) {
        pipe(observer, Disposable_dispose(err));
      }
    };

    const ctx = newInstance(AsyncContext, observer, runComputation, mode);

    pipe(observer, Observer_schedule(runComputation));
  });

export const Observable_async__memo = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_memoOrUse](false, f, ...args);
};

export const Observable_async__await = <T>(
  observable: ObservableLike<T>,
): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, true) as T;
};

export const Observable_async__observe = <T>(
  observable: ObservableLike<T>,
): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, false);
};

export const Observable_async__do = /*@__PURE__*/ (() => {
  const deferSideEffect = (f: (...args: any[]) => void, ...args: unknown[]) =>
    Observable_create(observer => {
      const callback = () => {
        f(...args);
        pipe(observer, Observer_notify(none), Disposable_dispose());
      };

      pipe(observer, Observer_schedule(callback));
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = ctx[AsyncContext_observer][ObserverLike_scheduler];
    const observable = ctx[AsyncContext_memoOrUse](
      false,
      deferSideEffect,
      f,
      ...args,
    );
    const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](
      false,
      Observable_subscribe,
      scheduler,
    );
    ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
  };
})();

export const Observable_async__using = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_memoOrUse](true, f, ...args);
};

export function Observable_async__currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_observer][ObserverLike_scheduler];
}

export const Observable_async__stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <
    TReq,
    T,
    TStream extends StreamLike<TReq, T>,
  >(
    streamable: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    replay: number,
  ) => pipe(streamable, Streamable_stream(scheduler, { replay }));

  return <TReq, T, TStream extends StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
    {
      replay = 0,
      scheduler,
    }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
  ): TStream => {
    const currentScheduler = Observable_async__currentScheduler();
    return Observable_async__using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      replay,
    ) as TStream;
  };
})();

export const Observable_async__state = /*@__PURE__*/ (() => {
  const createStateOptions = <T>(equality: Optional<Equality<T>>) =>
    isSome(equality) ? { equality } : none;

  return <T>(
    initialState: () => T,
    options: {
      readonly equality?: Optional<Equality<T>>;
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = Observable_async__memo(createStateOptions, equality);
    const streamable = Observable_async__memo(
      Streamable_createStateStore,
      initialState,
      optionsMemo,
    );
    return Observable_async__stream(streamable) as StreamLike<Updater<T>, T>;
  };
})();
