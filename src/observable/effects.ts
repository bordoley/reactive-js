import {
  DisposableLike,
  Error,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
  disposed,
} from "../disposable";
import { __DEV__, warn } from "../env";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  SideEffect,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
  arrayEquality,
  ignore,
  pipe,
  raise,
} from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerLike, schedule } from "../scheduler";
import { empty } from "./empty";
import { LatestMode, latest } from "./latest";
import { defer } from "./observable";
import { subscribe } from "./subscribe";

const arrayStrictEquality = arrayEquality();

const enum EffectType {
  Await = 0,
  Memo = 1,
  Observe = 2,
  Using = 3,
}

type AwaitEffect = {
  readonly type: EffectType.Await;
  readonly observable: ObservableLike<unknown>;
  readonly subscription: DisposableLike;
  value: Option<unknown>;
  hasValue: boolean;
};

type MemoEffect = {
  readonly type: EffectType.Memo;
  f: (...args: any[]) => unknown;
  args: any[];
  value: unknown;
};

type ObserveEffect = {
  readonly type: EffectType.Observe;
  observable: ObservableLike<unknown>;
  subscription: DisposableLike;
  value: Option<unknown>;
  hasValue: boolean;
};

type UsingEffect = {
  readonly type: EffectType.Using;
  f: (...args: any[]) => unknown;
  args: any[];
  value: DisposableLike;
};

type AsyncEffect = AwaitEffect | MemoEffect | UsingEffect;

const asyncAwaitSymbol = Symbol("@reactive-js/core/observable/effect/await");

function validateAsyncEffect(
  ctx: AsyncContext,
  type: EffectType.Await,
): Option<AwaitEffect>;
function validateAsyncEffect(
  ctx: AsyncContext,
  type: EffectType.Memo,
): Option<MemoEffect>;
function validateAsyncEffect(
  ctx: AsyncContext,
  type: EffectType.Using,
): Option<UsingEffect>;
function validateAsyncEffect(
  ctx: AsyncContext,
  type: EffectType,
): Option<AsyncEffect> {
  const { effects, index } = ctx;
  ctx.index++;

  const effect = effects[index];

  if (isSome(effect) && effect.type === type) {
    return effect;
  } else if (isNone(effect)) {
    return none;
  } else {
    return raise("async effect called out of order");
  }
}

class AsyncContext {
  index = 0;
  readonly effects: AsyncEffect[] = [];

  private readonly runComputation: SideEffect;
  private scheduledComputationSubscription = disposed;

  constructor(
    private readonly scheduler: SchedulerLike & DisposableLike,
    runComputation: SideEffect,
  ) {
    this.runComputation = () => {
      const { scheduledComputationSubscription } = this;

      this.scheduledComputationSubscription = scheduledComputationSubscription.isDisposed
        ? pipe(this.scheduler, schedule(runComputation))
        : scheduledComputationSubscription;
    };
  }

  await<T>(observable: ObservableLike<T>): T {
    const effect = validateAsyncEffect(this, EffectType.Await);

    if (isNone(effect)) {
      const subscription = pipe(
        observable,
        subscribe(this.scheduler, next => {
          effect.value = next;
          effect.hasValue = true;
        }),
      );

      addTeardown(subscription, this.runComputation);
      addDisposable(this.scheduler, subscription);

      const effect: AwaitEffect = {
        type: EffectType.Await,
        observable,
        subscription,
        value: none,
        hasValue: false,
      };

      this.effects.push(effect);

      throw asyncAwaitSymbol;
    } else {
      const { subscription } = effect;
      const { error } = subscription;

      if (observable !== effect.observable) {
        warn("async await effect invoked with different observable.");
      }

      if (isNone(error) && effect.hasValue) {
        return effect.value as T;
      } else if (isSome(error)) {
        return raise(error.cause);
      } else {
        return raise("observable completed without producing a value.");
      }
    }
  }

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateAsyncEffect(this, EffectType.Memo);

    if (isNone(effect)) {
      const value = f(...args);
      this.effects.push({ type: EffectType.Memo, f, args, value });
      return value;
    } else {
      if (f !== effect.f || !arrayStrictEquality(args, effect.args)) {
        warn("async memo effect invoked with different function or arguments.");
      }
      return effect.value as T;
    }
  }

  using<T extends DisposableLike>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateAsyncEffect(this, EffectType.Using);

    if (isNone(effect)) {
      const value = f(...args);
      addDisposableDisposeParentOnChildError(this.scheduler, value);

      this.effects.push({
        type: EffectType.Using,
        f,
        args,
        value,
      });
      return value;
    } else {
      if (f !== effect.f || !arrayStrictEquality(args, effect.args)) {
        warn(
          "async using effect invoked with different function or arguments.",
        );
      }

      return effect.value as T;
    }
  }
}

let currentCtx: Option<AsyncContext | ObservableContext> = none;

export const async = <T>(computation: Factory<T>): ObservableLike<T> =>
  defer((observer: ObserverLike<T>) => {
    const runComputation = () => {
      let result: Option<T> = none;
      let isAwaiting = false;
      let error: Option<Error> = none;

      currentCtx = ctx;
      try {
        result = computation();
      } catch (cause) {
        isAwaiting = cause === asyncAwaitSymbol;
        if (!isAwaiting) {
          error = { cause };
        }
      }
      currentCtx = none;
      ctx.index = 0;

      if (isSome(error)) {
        observer.dispose(error);
      } else if (!isAwaiting) {
        observer.notify(result as T);
        observer.dispose();
      }
    };

    const ctx = new AsyncContext(observer, runComputation);

    return runComputation;
  });

type ObservableEffect = ObserveEffect | MemoEffect | UsingEffect;

function validateObservableEffect(
  ctx: ObservableContext,
  type: EffectType.Observe,
): ObserveEffect;
function validateObservableEffect(
  ctx: ObservableContext,
  type: EffectType.Memo,
): MemoEffect;
function validateObservableEffect(
  ctx: ObservableContext,
  type: EffectType.Using,
): UsingEffect;
function validateObservableEffect(
  ctx: ObservableContext,
  type: EffectType,
): ObservableEffect {
  const { effects, index } = ctx;
  ctx.index++;

  const effect = effects[index];

  if (isNone(effect)) {
    const newEffect: ObservableEffect =
      type === EffectType.Memo
        ? {
            type,
            f: ignore,
            args: [],
            value: none,
          }
        : type === EffectType.Observe
        ? {
            type,
            observable: empty(),
            subscription: disposed,
            value: none,
            hasValue: false,
          }
        : type === EffectType.Using
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
}

class ObservableContext {
  index = 0;
  readonly effects: ObservableEffect[] = [];
  private scheduledComputationSubscription = disposed;

  constructor(
    readonly scheduler: SchedulerLike & DisposableLike,
    private readonly runComputation: () => void,
    private readonly mode: ObservableEffectMode,
  ) {}

  private readonly cleanup = () => {
    const { effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          effect.type === EffectType.Observe && !effect.subscription.isDisposed,
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      this.scheduledComputationSubscription.isDisposed
    ) {
      this.scheduler.dispose();
    }
  };

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateObservableEffect(this, EffectType.Memo);

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
    const effect = validateObservableEffect(this, EffectType.Observe);

    if (effect.observable === observable) {
      return effect.value as Option<T>;
    } else {
      pipe(effect.subscription, dispose());

      const subscription = pipe(
        observable,
        subscribe(this.scheduler, next => {
          effect.value = next;
          effect.hasValue = true;

          if (this.mode === ObservableEffectMode.CombineLatest) {
            this.runComputation();
          } else {
            const { scheduledComputationSubscription } = this;

            this.scheduledComputationSubscription = scheduledComputationSubscription.isDisposed
              ? pipe(this.scheduler, schedule(this.runComputation))
              : scheduledComputationSubscription;
          }
        }),
      );

      addOnDisposedWithoutErrorTeardown(subscription, this.cleanup);

      addDisposableDisposeParentOnChildError(this.scheduler, subscription);

      effect.observable = observable;
      effect.subscription = subscription;
      effect.value = none;
      effect.hasValue = false;
      return none;
    }
  }

  using<T extends DisposableLike>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateObservableEffect(this, EffectType.Using);

    if (f === effect.f && arrayStrictEquality(args, effect.args)) {
      return effect.value as T;
    } else {
      pipe(effect.value, dispose());

      const value = f(...args);
      addDisposableDisposeParentOnChildError(this.scheduler, value);

      effect.f = f;
      effect.args = args;
      effect.value = value;

      return value;
    }
  }
}

export const enum ObservableEffectMode {
  Batched = 0,
  CombineLatest = 1,
}

export const observable = <T>(
  computation: Factory<T>,
  { mode = ObservableEffectMode.Batched }: { mode?: ObservableEffectMode } = {},
): ObservableLike<T> =>
  defer((observer: ObserverLike<T>) => {
    const runComputation = () => {
      let result: Option<T> = none;
      let error: Option<Error> = none;

      currentCtx = ctx;
      try {
        result = computation();
      } catch (cause) {
        error = { cause };
      }
      currentCtx = none;
      ctx.index = 0;

      const { effects } = ctx;
      const effectsLength = effects.length;

      // Inline this for perf
      let allObserveEffectsHaveValues = true;
      let hasOutstandingEffects = false;
      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        const { type } = effect;

        if (
          type === EffectType.Observe &&
          !(effect as ObserveEffect).hasValue
        ) {
          allObserveEffectsHaveValues = false;
        }

        if (
          type === EffectType.Observe &&
          !(effect as ObserveEffect).subscription.isDisposed
        ) {
          hasOutstandingEffects = true;
        }

        if (!allObserveEffectsHaveValues && hasOutstandingEffects) {
          break;
        }
      }

      const combineLatestModeShouldNotify =
        mode === ObservableEffectMode.CombineLatest &&
        allObserveEffectsHaveValues &&
        hasOutstandingEffects;

      const hasError = isSome(error);

      const shouldNotify =
        !hasError &&
        (combineLatestModeShouldNotify ||
          mode === ObservableEffectMode.Batched);

      const shouldDispose = !hasOutstandingEffects || hasError;

      if (shouldNotify) {
        observer.notify(result as T);
      }

      if (shouldDispose) {
        observer.dispose(error);
      }
    };

    const ctx = new ObservableContext(observer, runComputation, mode);

    return runComputation;
  });

const assertCurrentContext = (): AsyncContext | ObservableContext =>
  isNone(currentCtx)
    ? raise("effect must be called within a computational expression")
    : currentCtx;

export function __memo<T>(fn: Factory<T>): T;
export function __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
export function __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
export function __memo<TA, TB, TC, T>(
  fn: Function3<TA, TB, TC, T>,
  a: TA,
  b: TB,
  c: TC,
): T;
export function __memo<TA, TB, TC, TD, T>(
  fn: Function4<TA, TB, TC, TD, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): T;
export function __memo<TA, TB, TC, TD, TE, T>(
  fn: Function5<TA, TB, TC, TD, TE, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): T;
export function __memo<TA, TB, TC, TD, TE, TF, T>(
  fn: Function6<TA, TB, TC, TD, TE, TF, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): T;
export function __memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
  const ctx = assertCurrentContext();
  return ctx.memo(f, ...args);
}

export const __observe = <T>(observable: ObservableLike<T>): Option<T> => {
  const ctx = assertCurrentContext();
  return ctx instanceof ObservableContext
    ? ctx.observe(observable)
    : raise(
        "__observe may only be called within an observable or concurrent computation",
      );
};

export function __await<T>(fn: Factory<ObservableLike<T>>): T;
export function __await<TA, T>(fn: Function1<TA, ObservableLike<T>>, a: TA): T;
export function __await<TA, TB, T>(
  fn: Function2<TA, TB, ObservableLike<T>>,
  a: TA,
  b: TB,
): T;
export function __await<TA, TB, TC, T>(
  fn: Function3<TA, TB, TC, ObservableLike<T>>,
  a: TA,
  b: TB,
  c: TC,
): T;
export function __await<TA, TB, TC, TD, T>(
  fn: Function4<TA, TB, TC, TD, ObservableLike<T>>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): T;
export function __await<TA, TB, TC, TD, TE, T>(
  fn: Function5<TA, TB, TC, TD, TE, ObservableLike<T>>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): T;
export function __await<TA, TB, TC, TD, TE, TF, T>(
  fn: Function6<TA, TB, TC, TD, TE, TF, ObservableLike<T>>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): T;
export function __await<T>(observable: ObservableLike<T>): T;
export function __await<T>(
  f: ((...args: any[]) => ObservableLike<T>) | ObservableLike<T>,
  ...args: any[]
): T {
  const ctx = assertCurrentContext();

  return typeof f === "function" && ctx instanceof AsyncContext
    ? ctx.await(ctx.memo(f, ...args))
    : typeof f !== "function" && ctx instanceof AsyncContext
    ? ctx.await(f)
    : raise("__await may only be called within an async computation");
}

export function __concurrent<TA, TB>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
): [TA, TB];
export function __concurrent<TA, TB, TC, T>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
): [TA, TB, TC];
export function __concurrent<TA, TB, TC, TD>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
): [TA, TB, TC, TD];
export function __concurrent<TA, TB, TC, TD, TE>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
): [TA, TB, TC, TD, TE];
export function __concurrent<TA, TB, TC, TD, TE, TF>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
): [TA, TB, TC, TD, TE, TF];
export function __concurrent<TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
): [TA, TB, TC, TD, TE, TF, TG];
export function __concurrent<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
): [TA, TB, TC, TD, TE, TF, TG, TH];
export function __concurrent<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
  i: ObservableLike<TI>,
): [TA, TB, TC, TD, TE, TF, TG, TH, TI];
export function __concurrent(
  ...observables: readonly ObservableLike<unknown>[]
): readonly unknown[] {
  return __await(latest, observables, LatestMode.Combine);
}

const deferSideEffect = (f: (...args: any[]) => void, ...args: any[]) =>
  defer(observer => () => {
    f(...args);
    observer.notify(none);
    observer.dispose();
  });

export function __do(fn: SideEffect): void;
export function __do<TA>(fn: SideEffect1<TA>, a: TA): void;
export function __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
export function __do<TA, TB, TC>(
  fn: SideEffect3<TA, TB, TC>,
  a: TA,
  b: TB,
  c: TC,
): void;
export function __do<TA, TB, TC, TD>(
  fn: SideEffect4<TA, TB, TC, TD>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): void;
export function __do<TA, TB, TC, TD, TE>(
  fn: SideEffect5<TA, TB, TC, TD, TE>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): void;
export function __do<TA, TB, TC, TD, TE, TF>(
  fn: SideEffect6<TA, TB, TC, TD, TE, TF>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): void;
export function __do(f: (...args: any[]) => void, ...args: any[]): void {
  const ctx = assertCurrentContext();
  if (ctx instanceof AsyncContext) {
    ctx.memo(f, ...args);
  } else if (ctx instanceof ObservableContext) {
    const scheduler = __currentScheduler();
    const observable = ctx.memo(deferSideEffect, f, ...args);
    const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
    ctx.using(subscribeOnScheduler, observable);
  }
}

export function __using<T extends DisposableLike>(fn: Factory<T>): T;
export function __using<TA, T extends DisposableLike>(
  fn: Function1<TA, T>,
  a: TA,
): T;
export function __using<TA, TB, T extends DisposableLike>(
  fn: Function2<TA, TB, T>,
  a: TA,
  b: TB,
): T;
export function __using<TA, TB, TC, T extends DisposableLike>(
  fn: Function3<TA, TB, TC, T>,
  a: TA,
  b: TB,
  c: TC,
): T;
export function __using<TA, TB, TC, TD, T extends DisposableLike>(
  fn: Function4<TA, TB, TC, TD, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
): T;
export function __using<TA, TB, TC, TD, TE, T extends DisposableLike>(
  fn: Function5<TA, TB, TC, TD, TE, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
): T;
export function __using<TA, TB, TC, TD, TE, TF, T extends DisposableLike>(
  fn: Function6<TA, TB, TC, TD, TE, TF, T>,
  a: TA,
  b: TB,
  c: TC,
  d: TD,
  e: TE,
  f: TF,
): T;
export function __using<T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: any[]
): T {
  const ctx = assertCurrentContext();
  return ctx.using(f, ...args);
}

export function __currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return ctx instanceof ObservableContext
    ? ctx.scheduler
    : raise(
        "__currentScheduler may only be called within an observable computation",
      );
}
