import {
  DisposableLike,
  Error,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
  disposed,
} from "../disposable";
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
} from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerLike, schedule } from "../scheduler";
import { defer } from "./observable";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

interface AsyncContextLike {
  await<T>(f: (...args: any[]) => ObservableLike<T>, ...args: any[]): T;
  memo<T>(f: (...args: any[]) => T, ...args: any[]): T;
  observe<T>(observable: ObservableLike<T>): Option<T>;
  using<T extends DisposableLike>(f: (...args: any[]) => T, ...args: any[]): T;
}

const asyncAwaitSymbol = Symbol("@reactive-js/core/asynchronous/await");

const enum AsyncEffectType {
  Await = 0,
  Memo = 1,
  Observe = 2,
  Using = 3,
}

type AwaitAsyncEffect = {
  readonly type: AsyncEffectType.Await;
  f: (...args: any[]) => unknown;
  args: any[];
  observable: ObservableLike<unknown>;
  subscription: Option<DisposableLike>;
  value: Option<unknown>;
  hasValue: boolean;
};

type MemoAsyncEffect = {
  readonly type: AsyncEffectType.Memo;
  f: (...args: any[]) => unknown;
  args: any[];
  value: unknown;
};

type ObserveAsyncEffect = {
  readonly type: AsyncEffectType.Observe;
  observable: ObservableLike<unknown>;
  subscription: Option<DisposableLike>;
  value: Option<unknown>;
};

type UsingAsyncEffect = {
  readonly type: AsyncEffectType.Using;
  f: (...args: any[]) => unknown;
  args: any[];
  value: DisposableLike;
  dirty: boolean;
};

type AsyncEffect =
  | AwaitAsyncEffect
  | MemoAsyncEffect
  | ObserveAsyncEffect
  | UsingAsyncEffect;

const arrayStrictEquality = arrayEquality();

function validateState(
  ctx: AsyncContextImpl,
  type: AsyncEffectType.Await,
): Option<AwaitAsyncEffect>;
function validateState(
  ctx: AsyncContextImpl,
  type: AsyncEffectType.Memo,
): Option<MemoAsyncEffect>;
function validateState(
  ctx: AsyncContextImpl,
  type: AsyncEffectType.Observe,
): Option<ObserveAsyncEffect>;
function validateState(
  ctx: AsyncContextImpl,
  type: AsyncEffectType.Using,
): Option<UsingAsyncEffect>;
function validateState(
  ctx: AsyncContextImpl,
  type: AsyncEffectType,
): Option<AsyncEffect> {
  const { effects, index } = ctx;
  if (index >= effects.length) {
    ctx.index++;
    return none;
  }

  const effect = effects[index];
  ctx.index++;

  if (effect.type !== type) {
    throw new Error();
  }

  return effect;
}

class AsyncContextImpl implements AsyncContextLike {
  index = 0;

  constructor(readonly effects: AsyncEffect[]) {}

  await<T>(f: (...args: any[]) => ObservableLike<T>, ...args: any[]): T {
    const effect = validateState(this, AsyncEffectType.Await);
    if (isNone(effect)) {
      const observable = f(...args);

      this.effects.push({
        type: AsyncEffectType.Await,
        f,
        args,
        observable,
        subscription: none,
        value: none,
        hasValue: false,
      });
      throw asyncAwaitSymbol;
    } else if (f === effect.f && arrayStrictEquality(args, effect.args)) {
      const { hasValue, subscription } = effect;

      if (hasValue && isSome(subscription) && subscription.isDisposed) {
        return effect.value as T;
      } else if (isSome(subscription) && subscription.isDisposed) {
        throw new Error();
      } else {
        throw asyncAwaitSymbol;
      }
    } else {
      // This could happen if a state (__observe) variable is used prior to an __await effect.
      // We probably should trim the effect list and re-initialize at this point.
      throw new Error();
    }
  }

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateState(this, AsyncEffectType.Memo);

    if (isNone(effect)) {
      const value = f(...args);
      this.effects.push({ type: AsyncEffectType.Memo, f, args, value });
      return value;
    } else if (f === effect.f && arrayStrictEquality(args, effect.args)) {
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
    const effect = validateState(this, AsyncEffectType.Observe);

    if (isNone(effect)) {
      this.effects.push({
        type: AsyncEffectType.Observe,
        observable,
        subscription: none,
        value: none,
      });
      return none;
    } else if (observable === effect.observable) {
      return effect.value as Option<T>;
    } else {
      const oldSubscription = effect.subscription;
      effect.subscription = none;
      effect.observable = observable;

      pipe(oldSubscription, dispose());
      return none;
    }
  }

  using<T extends DisposableLike>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateState(this, AsyncEffectType.Using);

    if (isNone(effect)) {
      const value = f(...args);
      this.effects.push({
        type: AsyncEffectType.Using,
        f,
        args,
        value,
        dirty: true,
      });
      return value;
    } else if (f === effect.f && arrayStrictEquality(args, effect.args)) {
      return effect.value as T;
    } else {
      pipe(effect.value, dispose());

      const value = f(...args);

      effect.f = f;
      effect.args = args;
      effect.value = value;
      effect.dirty = true;

      return value;
    }
  }
}

let currentCtx: Option<AsyncContextLike> = none;

export const async = <T>(
  computation: Function1<SchedulerLike, T>,
): ObservableLike<T> => {
  const factory = () => {
    const effects: AsyncEffect[] = [];
    let scheduledComputationSubscription = disposed;
    let onDisposeWithoutError: Option<SideEffect> = none;

    const scheduleComputation = (observer: ObserverLike<T>) => {
      if (scheduledComputationSubscription.isDisposed) {
        scheduledComputationSubscription = pipe(
          observer,
          schedule(runComputation),
        );
      }
    };

    const createOnDisposeWithoutError = (observer: ObserverLike<T>) => () => {
      if (!scheduledComputationSubscription.isDisposed) {
        return;
      }

      const effectsLength = effects.length;
      let hasOutstandingEffects = false;

      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];

        if (effect.type !== AsyncEffectType.Observe) {
          continue;
        }

        const { subscription } = effect;
        hasOutstandingEffects = !(subscription?.isDisposed ?? false);

        if (hasOutstandingEffects) {
          break;
        }
      }

      if (!hasOutstandingEffects) {
        pipe(observer, dispose());
      }
    };

    const runComputation = (observer: ObserverLike<T>) => {
      onDisposeWithoutError =
        onDisposeWithoutError ?? createOnDisposeWithoutError(observer);

      const ctx = new AsyncContextImpl(effects);

      let result: Option<T> = none;
      let error: Option<Error> = none;
      let waitingForAwait = false;

      currentCtx = ctx;
      try {
        result = computation(observer);
      } catch (cause) {
        currentCtx = none;
        if (cause === asyncAwaitSymbol) {
          waitingForAwait = true;
        } else {
          error = { cause };
          // We still want to setup all the subscriptions in this case
          // because using effects need to be disposed in the case of error.
        }
      }

      if (isNone(error) && !waitingForAwait) {
        observer.notify(result as T);
      }

      const effectsLength = effects.length;
      let hasOutstandingEffects = false;

      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];

        if (effect.type === AsyncEffectType.Using && effect.dirty) {
          effect.dirty = false;
          addDisposableDisposeParentOnChildError(observer, effect.value);
          continue;
        }

        if (
          effect.type === AsyncEffectType.Await &&
          isNone(effect.subscription)
        ) {
          const { observable } = effect;

          const subscription = pipe(
            observable,
            onNotify(next => {
              effect.value = next;
              effect.hasValue = true;
              scheduleComputation(observer);
            }),
            subscribe(observer),
          );

          addDisposableDisposeParentOnChildError(observer, subscription);

          addOnDisposedWithoutErrorTeardown(
            subscription,
            onDisposeWithoutError,
          );

          effect.subscription = subscription;

          hasOutstandingEffects = true;
          continue;
        } else if (
          effect.type === AsyncEffectType.Await &&
          isSome(effect.subscription) &&
          !effect.subscription.isDisposed
        ) {
          hasOutstandingEffects = true;
          continue;
        }

        if (
          effect.type === AsyncEffectType.Observe &&
          isNone(effect.subscription)
        ) {
          const { observable } = effect;

          const subscription = pipe(
            observable,
            onNotify(next => {
              effect.value = next;
              scheduleComputation(observer);
            }),
            subscribe(observer),
          );

          addDisposableDisposeParentOnChildError(observer, subscription);

          addOnDisposedWithoutErrorTeardown(
            subscription,
            onDisposeWithoutError,
          );

          effect.subscription = subscription;

          hasOutstandingEffects = true;
          continue;
        } else if (
          effect.type === AsyncEffectType.Observe &&
          isSome(effect.subscription) &&
          !effect.subscription.isDisposed
        ) {
          hasOutstandingEffects = true;
          continue;
        }
      }

      if (!hasOutstandingEffects || isSome(error)) {
        pipe(observer, dispose(error));
      }
    };

    return runComputation;
  };
  return defer(factory);
};

const assertCurrentContext = (): AsyncContextLike => {
  if (isNone(currentCtx)) {
    throw new Error();
  }
  return currentCtx;
};

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
  return ctx.observe(observable);
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
  return ctx.await<T>(f, ...args);
}

const deferSideEffect = (f: (...args: any[]) => void, ...args: any[]) =>
  defer(() => observer => {
    f(...args);
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
  const observable = ctx.memo(deferSideEffect, f, ...args);
  __observe(observable);
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
