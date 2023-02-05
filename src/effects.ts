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
  error,
  getLength,
  ignore,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  raise,
} from "./functions";
import { ObservableLike, ObserverLike } from "./rx";
import {
  create as createObservable,
  empty,
  forEach,
  subscribe,
} from "./rx/Observable";
import { getScheduler, schedule } from "./rx/Observer";
import { notify } from "./rx/Sink";
import { SchedulerLike } from "./scheduling";
import { StreamLike, StreamableLike } from "./streaming";
import { createStateStore, stream } from "./streaming/Streamable";
import { DisposableLike } from "./util";
import {
  addTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "./util/Disposable";

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

type MemoEffect = {
  readonly type: typeof Memo;
  f: (...args: any[]) => unknown;
  args: unknown[];
  value: unknown;
};

type AwaitEffect = {
  readonly type: typeof Await;
  observable: ObservableLike;
  subscription: DisposableLike;
  value: Optional;
  hasValue: boolean;
};

type ObserveEffect = {
  readonly type: typeof Observe;
  observable: ObservableLike;
  subscription: DisposableLike;
  value: Optional;
  hasValue: boolean;
};

type UsingEffect = {
  readonly type: typeof Using;
  f: (...args: any[]) => unknown;
  args: unknown[];
  value: DisposableLike;
};
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
  const { effects, index } = ctx;
  ctx.index++;

  const effect = effects[index];

  if (isNone(effect)) {
    const newEffect: AsyncEffect =
      type === Memo
        ? {
            type,
            f: ignore,
            args: [],
            value: none,
          }
        : type === Await || type === Observe
        ? {
            type,
            observable: empty(),
            subscription: disposed,
            value: none,
            hasValue: false,
          }
        : type === Using
        ? {
            type,
            f: ignore,
            args: [],
            value: disposed,
          }
        : raise("invalid effect type");

    effects.push(newEffect);
    return newEffect;
  } else {
    return effect.type === type
      ? effect
      : raise("observable effect called out of order");
  }
}) as ValidateAsyncEffect;

const arrayStrictEquality = arrayEquality();

const awaiting = error();

class AsyncContext {
  index = 0;
  readonly effects: AsyncEffect[] = [];
  private scheduledComputationSubscription: DisposableLike = disposed;

  constructor(
    readonly observer: ObserverLike,
    private readonly runComputation: () => void,
    private readonly mode: EffectsMode,
  ) {}

  private readonly cleanup = () => {
    const { effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect.type === Await || effect.type === Observe) &&
          !isDisposed(effect.subscription),
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      isDisposed(this.scheduledComputationSubscription)
    ) {
      pipe(this.observer, dispose());
    }
  };

  memo<T>(f: (...args: any[]) => T, ...args: unknown[]): T {
    const effect = validateAsyncEffect(this, Memo);

    if (f === effect.f && arrayStrictEquality(args, effect.args)) {
      return effect.value as T;
    } else {
      const value = f(...args);
      effect.f = f;
      effect.args = args;
      effect.value = value;
      return value;
    }
  }

  awaitOrObserve<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    const effect = shouldAwait
      ? validateAsyncEffect(this, Await)
      : validateAsyncEffect(this, Observe);

    if (effect.observable === observable) {
      return effect.value as T;
    } else {
      pipe(effect.subscription, dispose());

      const { observer, runComputation } = this;
      const scheduler = getScheduler(observer);

      const subscription = pipe(
        observable,
        forEach<T>(next => {
          effect.value = next;
          effect.hasValue = true;

          if (this.mode === "combine-latest") {
            runComputation();
          } else {
            let { scheduledComputationSubscription } = this;

            this.scheduledComputationSubscription = isDisposed(
              scheduledComputationSubscription,
            )
              ? pipe(observer, schedule(runComputation))
              : scheduledComputationSubscription;
          }
        }),
        subscribe(scheduler),
        addTo(observer),
        onComplete(this.cleanup),
      );

      effect.observable = observable;
      effect.subscription = subscription;
      effect.value = none;
      effect.hasValue = false;

      return shouldAwait ? raise(awaiting) : none;
    }
  }

  using<T extends DisposableLike>(
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = validateAsyncEffect(this, Using);

    if (f === effect.f && arrayStrictEquality(args, effect.args)) {
      return effect.value as T;
    } else {
      pipe(effect.value, dispose());

      const value = pipe(f(...args), addTo(this.observer));

      effect.f = f;
      effect.args = args;
      effect.value = value;

      return value;
    }
  }
}

let currentCtx: Optional<AsyncContext> = none;

export const async = <T>(
  computation: Factory<T>,
  { mode = "batched" }: { mode?: "batched" | "combine-latest" } = {},
): ObservableLike<T> =>
  createObservable((observer: ObserverLike<T>) => {
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
      currentCtx = none;
      ctx.index = 0;

      const { effects } = ctx;
      const effectsLength = getLength(effects);

      // Inline this for perf
      let allObserveEffectsHaveValues = true;
      let hasOutstandingEffects = false;
      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        const { type } = effect;

        if (
          (type === Await || type === Observe) &&
          !(effect as ObserveEffect).hasValue
        ) {
          allObserveEffectsHaveValues = false;
        }

        if (
          (type === Await || type === Observe) &&
          !isDisposed((effect as ObserveEffect).subscription)
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
        pipe(observer, notify(result as T));
      }

      if (shouldDispose) {
        pipe(observer, dispose(err));
      }
    };

    const ctx = newInstance(AsyncContext, observer, runComputation, mode);

    pipe(observer, schedule(runComputation));
  });

const assertCurrentContext = (): AsyncContext =>
  isNone(currentCtx)
    ? raise("effect must be called within a computational expression")
    : currentCtx;

interface __Memo {
  <T>(fn: Factory<T>): T;
  <TA, T>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
  <TA, TB, TC, TD, T>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}
export const __memo: __Memo = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx.memo(f, ...args);
};

export const __await = <T>(observable: ObservableLike<T>): T => {
  const ctx = assertCurrentContext();
  return ctx.awaitOrObserve(observable, true) as T;
};

export const __observe = <T>(observable: ObservableLike<T>): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx.awaitOrObserve(observable, false);
};

interface __Do {
  (fn: SideEffect): void;
  <TA>(fn: SideEffect1<TA>, a: TA): void;
  <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
  <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
  <TA, TB, TC, TD>(
    fn: SideEffect4<TA, TB, TC, TD>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): void;
  <TA, TB, TC, TD, TE>(
    fn: SideEffect5<TA, TB, TC, TD, TE>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): void;
  <TA, TB, TC, TD, TE, TF>(
    fn: SideEffect6<TA, TB, TC, TD, TE, TF>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): void;
}
export const __do: __Do = /*@__PURE__*/ (() => {
  const deferSideEffect = (f: (...args: any[]) => void, ...args: unknown[]) =>
    createObservable(observer => {
      const callback = () => {
        f(...args);
        pipe(observer, notify(none), dispose());
      };

      pipe(observer, schedule(callback));
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = getScheduler(ctx.observer);
    const observable = ctx.memo(deferSideEffect, f, ...args);
    const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
    ctx.using(subscribeOnScheduler, observable);
  };
})();

interface __Using {
  <T extends DisposableLike>(fn: Factory<T>): T;
  <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T extends DisposableLike>(
    fn: Function3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  <TA, TB, TC, TD, T extends DisposableLike>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T extends DisposableLike>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}
export const __using: __Using = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx.using(f, ...args);
};

export function __currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return getScheduler(ctx.observer);
}

export const __stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <
    TReq,
    T,
    TStream extends StreamLike<TReq, T>,
  >(
    streamable: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    replay: number,
  ) => pipe(streamable, stream(scheduler, { replay }));

  return <TReq, T, TStream extends StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
    {
      replay = 0,
      scheduler,
    }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
  ): TStream => {
    const currentScheduler = __currentScheduler();
    return __using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      replay,
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
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(createStateStore, initialState, optionsMemo);
    return __stream(streamable);
  };
})();
