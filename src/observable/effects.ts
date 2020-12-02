import {
  DisposableLike,
  Error,
  addDisposable,
  addDisposableDisposeParentOnChildError,
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

  return isNone(effect)
    ? none
    : effect.type !== type
    ? raise("async effect called out of order")
    : effect;
}

abstract class BaseContext {
  abstract memo<T>(f: (...args: any[]) => T, ...args: any[]): T;
  abstract using<T extends DisposableLike>(
    f: (...args: any[]) => T,
    ...args: any[]
  ): T;
}

class AsyncContext extends BaseContext {
  index = 0;
  readonly effects: AsyncEffect[] = [];

  constructor(
    private readonly observer: SchedulerLike & DisposableLike,
    private readonly runComputation: SideEffect,
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
        pipe(this.observer, schedule(this.runComputation));
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
      const { subscription } = effect;
      const { error } = subscription;

      if (observable !== effect.observable) {
        warn("async await effect invoked with different observable.");
      }

      return isSome(error)
        ? raise(error.cause)
        : effect.hasValue
        ? (effect.value as T)
        : raise("observable completed without producing a value.");
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
      addDisposableDisposeParentOnChildError(this.observer, value);

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
    return effect.type !== type
      ? raise("observable effect called out of order")
      : effect;
  }
}

class ObservableContext extends BaseContext {
  index = 0;
  readonly effects: ObservableEffect[] = [];

  constructor(
    readonly scheduler: SchedulerLike & DisposableLike,
    private readonly scheduleComputation: () => void,
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
          this.scheduleComputation();
        }),
        subscribe(this.scheduler),
      );
      addTeardown(subscription, () => {
        this.scheduleComputation();
      });
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

export const enum ObservableEffectMode {
  Batched = 0,
  Latest = 1,
}

export const observable = <T>(
  computation: Factory<T>,
  { mode = ObservableEffectMode.Batched }: { mode?: ObservableEffectMode } = {},
): ObservableLike<T> =>
  defer((observer: ObserverLike<T>) => {
    let scheduledComputationSubscription = disposed;

    const scheduleComputation = () => {
      switch (mode) {
        case ObservableEffectMode.Batched:
          scheduledComputationSubscription = scheduledComputationSubscription.isDisposed
            ? pipe(observer, schedule(runComputation))
            : scheduledComputationSubscription;
          break;
        case ObservableEffectMode.Latest:
          runComputation();
          break;
      }
    };

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

      if (isSome(error)) {
        observer.dispose(error);
      } else {
        const hasOutstandingEffects =
          ctx.effects.findIndex(
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

    const ctx = new ObservableContext(observer, scheduleComputation);

    return runComputation;
  });

const assertCurrentContext = (): BaseContext =>
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
    : raise("__observe may only be called within an observable computation");
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
    : raise("__await may only be called within an async computation");
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
    : raise(
        "__currentScheduler may only be called within an observable computation",
      );
}
