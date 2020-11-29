import {
  DisposableLike,
  Error,
  addDisposableDisposeParentOnChildError,
  dispose,
  disposed,
  addTeardown,
  addDisposable,
} from "../disposable";
import { __DEV__ } from "../env";
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
  pipe,
  raise,
  ignore,
} from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerLike, schedule } from "../scheduler";
import { empty } from "./empty";
import { defer } from "./observable";
import { onNotify } from "./onNotify";
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
  ctx: AsyncContext<unknown>,
  type: EffectType.Await,
): Option<AwaitEffect>;
function validateAsyncEffect(
  ctx: AsyncContext<unknown>,
  type: EffectType.Memo,
): Option<MemoEffect>;
function validateAsyncEffect(
  ctx: AsyncContext<unknown>,
  type: EffectType.Using,
): Option<UsingEffect>;
function validateAsyncEffect(
  ctx: AsyncContext<unknown>,
  type: EffectType,
): Option<AsyncEffect> {
  const { effects, index } = ctx;
  ctx.index++;

  if (index >= effects.length) {
    return none;
  } else {
    const effect = effects[index];

    return effect.type !== type
      ? raise("Async effect called out of order")
      : effect;
  }
}

abstract class BaseContext {
  abstract memo<T>(f: (...args: any[]) => T, ...args: any[]): T;
  abstract using<T extends DisposableLike>(
    f: (...args: any[]) => T,
    ...args: any[]
  ): T;
}

class AsyncContext<T> extends BaseContext {
  index = 0;

  constructor(
    readonly effects: AsyncEffect[],
    private readonly observer: ObserverLike<T>,
    private readonly runComputation: (observer: ObserverLike<T>) => void,
  ) {
    super();
  }

  await<T>(observable: ObservableLike<T>): T {
    const effect = validateAsyncEffect(this, EffectType.Await);

    if (isNone(effect)) {
      const subscription = pipe(
        observable,
        onNotify(next => {
          effect.value = next;
          effect.hasValue = true;
        }),
        subscribe(this.observer),
      );

      addTeardown(subscription, () => {
        pipe(
          this.observer,
          schedule(this.runComputation),
        );
      });

      addDisposable(this.observer, subscription);

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
      const { subscription }  = effect;
      const { error } = subscription;

      if (__DEV__ && observable !== effect.observable) {
        return raise("async effect called with different observable");
      } else if (isSome(error)) {
        throw error.cause;
      } else if (effect.hasValue) {
        return effect.value as T;
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
    } else if (__DEV__ && (f !== effect.f || !arrayStrictEquality(args, effect.args))) {
      return raise("memo arguments changed in async computation");
    } else {
      return effect.value as T;
    }
  }

  using<T extends DisposableLike>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateAsyncEffect(this, EffectType.Using);

    if (isNone(effect)) {
      const value = f(...args);
      addDisposableDisposeParentOnChildError(this.observer, value);

      this.effects.push({
        type: EffectType.Using,
        f,
        args,
        value,
      });
      return value;
    } else if (__DEV__ && (f !== effect.f || !arrayStrictEquality(args, effect.args))) {
      return raise("using arguments changed in async computation");
    } else {
      return effect.value as T;
    }
  }
}

let currentCtx: Option<
  AsyncContext<unknown> | ObservableContext<unknown>
> = none;

export const async = <T>(computation: Factory<T>): ObservableLike<T> =>
  defer(() => {
    const effects: AsyncEffect[] = [];

    const runComputation = (observer: ObserverLike<T>) => {
      const ctx = new AsyncContext(effects, observer, runComputation);

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

      if (isSome(error)) {
        observer.dispose(error);
      } else if (!isAwaiting) {
        observer.notify(result as T);
        observer.dispose();
      }
    };

    return runComputation;
  });

type ObservableEffect = ObserveEffect | MemoEffect | UsingEffect;

function validateObservableEffect(
  ctx: ObservableContext<unknown>,
  type: EffectType.Observe,
): ObserveEffect;
function validateObservableEffect(
  ctx: ObservableContext<unknown>,
  type: EffectType.Memo,
): MemoEffect;
function validateObservableEffect(
  ctx: ObservableContext<unknown>,
  type: EffectType.Using,
): UsingEffect;
function validateObservableEffect(
  ctx: ObservableContext<unknown>,
  type: EffectType,
): ObservableEffect {
  const { effects, index } = ctx;
  ctx.index++;

  if (index >= effects.length) {
    const effect: ObservableEffect =
      type === EffectType.Memo
        ? {
            type: EffectType.Memo,
            f: ignore,
            args: [],
            value: none,
          }
        : type === EffectType.Observe
        ? {
            type: EffectType.Observe,
            observable: empty(),
            subscription: disposed,
            value: none,
          }
        : type === EffectType.Using
        ? {
            type: EffectType.Using,
            f: ignore,
            args: [],
            value: disposed,
          }
        : raise("invalid effect type");

    effects.push(effect);
    return effect;
  } else {
    const effect = effects[index];
    if (effect.type !== type) {
      // if effects are out of order dispose any subsequent effects
      // and continue on.
      for (let i = index; i < effects.length; i++) {
        const effect = effects[i];
        const subscription =
          effect.type === EffectType.Observe
            ? effect.subscription
            : effect.type === EffectType.Using
            ? effect.value
            : disposed;
        subscription.dispose();
      }
      effects.length = index;
      return validateObservableEffect(ctx, type as any);
    } else {
      return effect;
    }
  }
}

class ObservableContext<T> extends BaseContext {
  index = 0;

  constructor(
    readonly effects: ObservableEffect[],
    readonly scheduler: ObserverLike<T>,
    private readonly runComputation: (observer: ObserverLike<T>) => void,
  ) {
    super();
  }

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
        onNotify(next => {
          effect.value = next;
          this.runComputation(this.scheduler);
        }),
        subscribe(this.scheduler),
      );

      addDisposableDisposeParentOnChildError(this.scheduler, subscription);

      effect.observable = observable;
      effect.subscription = subscription;
      effect.value = none;
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

export const observable = <T>(computation: Factory<T>): ObservableLike<T> =>
  defer(() => {
    const effects: ObservableEffect[] = [];
    let scheduledComputationSubscription = disposed;

    const scheduleComputation = (observer: ObserverLike<T>) => {
      if (scheduledComputationSubscription.isDisposed) {
        scheduledComputationSubscription = pipe(
          observer,
          schedule(runComputation),
        );
      }
    };

    const runComputation = (observer: ObserverLike<T>) => {
      const ctx = new ObservableContext(effects, observer, scheduleComputation);

      let result: Option<T> = none;
      let error: Option<Error> = none;

      currentCtx = ctx;
      try {
        result = computation();
      } catch (cause) {
        error = { cause };
      }
      currentCtx = none;

      if (isSome(error)) {
        observer.dispose(error);
      } else {
        const hasOutstandingEffects =
          effects.findIndex(
            effect =>
              effect.type === EffectType.Observe &&
              !effect.subscription.isDisposed,
          ) >= 0;

        observer.notify(result as T);
        if (!hasOutstandingEffects) {
          observer.dispose(error);
        }
      }
    };

    return runComputation;
  });

const assertCurrentContext = (): BaseContext =>
  isNone(currentCtx) ? raise() : currentCtx;

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
    : raise("observe can only be called in observable computations");
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
export function __await<T>(
  f: (...args: any[]) => ObservableLike<T>,
  ...args: any[]
): T {
  const ctx = assertCurrentContext();

  return ctx instanceof AsyncContext
    ? ctx.await(ctx.memo(f, ...args))
    : raise("await can only be called in async computations");
}

const deferSideEffect = (f: (...args: any[]) => void, ...args: any[]) =>
  defer(() => observer => {
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
    const observable = ctx.memo(deferSideEffect, f, ...args);
    ctx.observe(observable);
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
    : raise("currentScheduler only supported in observable computations");
}
