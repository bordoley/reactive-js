import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Option,
  SideEffect,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
  Updater,
  arrayEquality,
  getLength,
  ignore,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  raise,
} from "./functions";
import { ObservableLike, createObservable, emptyObservable } from "./rx";
import { forEach, subscribe } from "./rx/ObservableLike";
import { ObserverLike, SchedulerLike } from "./scheduling";
import { getScheduler } from "./scheduling/ObserverLike";
import { schedule } from "./scheduling/SchedulerLike";
import { StreamLike, StreamableLike, createStateStore } from "./streaming";
import { stream } from "./streaming/StreamableLike";
import { DisposableLike, Exception, disposed } from "./util";
import { addTo, dispose, isDisposed, onComplete } from "./util/DisposableLike";
import { notify } from "./util/SinkLike";

type EffectsMode = "batched" | "combine-latest";

const enum EffectContainerOf {
  Memo = 1,
  Observe = 2,
  Using = 3,
}

type MemoEffect = {
  readonly type: EffectContainerOf.Memo;
  f: (...args: any[]) => unknown;
  args: unknown[];
  value: unknown;
};

type ObserveEffect = {
  readonly type: EffectContainerOf.Observe;
  observable: ObservableLike;
  subscription: DisposableLike;
  value: Option;
  hasValue: boolean;
};

type UsingEffect = {
  readonly type: EffectContainerOf.Using;
  f: (...args: any[]) => unknown;
  args: unknown[];
  value: DisposableLike;
};
type ObservableEffect = ObserveEffect | MemoEffect | UsingEffect;

interface ValidateObservableEffect {
  (ctx: ObservableContext, type: EffectContainerOf.Observe): ObserveEffect;
  (ctx: ObservableContext, type: EffectContainerOf.Memo): MemoEffect;
  (ctx: ObservableContext, type: EffectContainerOf.Using): UsingEffect;
}
const validateObservableEffect: ValidateObservableEffect = ((
  ctx: ObservableContext,
  type: EffectContainerOf,
): ObservableEffect => {
  const { effects, index } = ctx;
  ctx.index++;

  const effect = effects[index];

  if (isNone(effect)) {
    const newEffect: ObservableEffect =
      type === EffectContainerOf.Memo
        ? {
            type,
            f: ignore,
            args: [],
            value: none,
          }
        : type === EffectContainerOf.Observe
        ? {
            type,
            observable: emptyObservable(),
            subscription: disposed,
            value: none,
            hasValue: false,
          }
        : type === EffectContainerOf.Using
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
}) as ValidateObservableEffect;

const arrayStrictEquality = arrayEquality();

class ObservableContext {
  index = 0;
  readonly effects: ObservableEffect[] = [];
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
          effect.type === EffectContainerOf.Observe &&
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
    const effect = validateObservableEffect(this, EffectContainerOf.Memo);

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

  observe<T>(observable: ObservableLike<T>): Option<T> {
    const effect = validateObservableEffect(this, EffectContainerOf.Observe);

    if (effect.observable === observable) {
      return effect.value as Option<T>;
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
              ? pipe(scheduler, schedule(runComputation), addTo(observer))
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
      return none;
    }
  }

  using<T extends DisposableLike>(
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = validateObservableEffect(this, EffectContainerOf.Using);

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

let currentCtx: Option<ObservableContext> = none;

export const async = <T>(
  computation: Factory<T>,
  { mode = "batched" }: { mode?: "batched" | "combine-latest" } = {},
): ObservableLike<T> =>
  createObservable((observer: ObserverLike<T>) => {
    const runComputation = () => {
      let result: Option<T> = none;
      let error: Option<Exception> = none;

      currentCtx = ctx;
      try {
        result = computation();
      } catch (cause) {
        error = { cause };
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
          type === EffectContainerOf.Observe &&
          !(effect as ObserveEffect).hasValue
        ) {
          allObserveEffectsHaveValues = false;
        }

        if (
          type === EffectContainerOf.Observe &&
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

      const hasError = isSome(error);

      const shouldNotify =
        !hasError && (combineLatestModeShouldNotify || mode === "batched");

      const shouldDispose = !hasOutstandingEffects || hasError;

      if (shouldNotify) {
        pipe(observer, notify(result as T));
      }

      if (shouldDispose) {
        pipe(observer, dispose(error));
      }
    };

    const ctx = newInstance(ObservableContext, observer, runComputation, mode);

    pipe(observer, getScheduler, schedule(runComputation), addTo(observer));
  });

const assertCurrentContext = (): ObservableContext =>
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

export const __await = <T>(observable: ObservableLike<T>): Option<T> => {
  const ctx = assertCurrentContext();
  return ctx.observe(observable);
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

      pipe(observer, getScheduler, schedule(callback), addTo(observer));
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
  const createStateOptions = <T>(equality: Option<Equality<T>>) =>
    isSome(equality) ? { equality } : none;

  return <T>(
    initialState: () => T,
    options: {
      readonly equality?: Option<Equality<T>>;
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(createStateStore, initialState, optionsMemo);
    return __stream(streamable);
  };
})();
