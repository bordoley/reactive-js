import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  DisposableLike,
  dispose,
  disposed,
} from "../disposable";
import {
  arrayEquality,
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  pipe,
  SideEffect1,
} from "../functions";
import {
  AbstractDelegatingObserver,
  assertObserverState,
} from "./observer";
import {
  observe,
  defer,
} from "./observable";
import {
  ObservableLike,
  ObserverLike,
} from "../observable";
import { Option, none, isNone } from "../option";
import { schedule } from "../scheduler";

interface AsyncContextLike {
  await<T>(observable: ObservableLike<T>): Option<T>;
  memo<T>(f: (...args: any[]) => T, ...args: any[]): T;
}

const enum AsyncEffectType {
  Await = 1,
  Memo = 2,
  Stream = 3,
}

type AwaitAsyncEffect = {
  type: AsyncEffectType.Await;
  observable: ObservableLike<unknown>;
  subscription: Option<DisposableLike>;
  value: Option<unknown>;
};

type MemoAsyncEffect = {
  type: AsyncEffectType.Memo;
  f: (...args: any[]) => unknown;
  args: any[];
  value: unknown;
};

type AsyncEffect = AwaitAsyncEffect | MemoAsyncEffect;

const arrayStrictEquality = arrayEquality();

class InitialAsyncContextImpl implements AsyncContextLike {
  constructor(private readonly effects: AsyncEffect[]) {}

  await<T>(observable: ObservableLike<T>): Option<T> {
    this.effects.push({
      type: AsyncEffectType.Await,
      observable,
      subscription: none,
      value: none,
    });
    return none;
  }

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const value = f(...args);
    this.effects.push({ type: AsyncEffectType.Memo, f, args, value });
    return value;
  }
}

const validateState = (ctx: AsyncContextImpl, type: AsyncEffectType) => {
  const { effects, index } = ctx;
  if (index >= effects.length) {
    throw new Error();
  }

  const effect = effects[index];
  ctx.index++;

  if (effect.type !== type) {
    throw new Error();
  }

  return effect;
};

class AsyncContextImpl implements AsyncContextLike {
  index = 0;

  constructor(readonly effects: readonly AsyncEffect[]) {}

  await<T>(observable: ObservableLike<T>): Option<T> {
    const effect = validateState(
      this,
      AsyncEffectType.Await,
    ) as AwaitAsyncEffect;

    if (observable === effect.observable) {
      return effect.value as Option<T>;
    } else {
      const oldSubscription = effect.subscription;
      effect.subscription = none;
      effect.observable = observable;

      pipe(oldSubscription, dispose());
      return none;
    }
  }

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const effect = validateState(this, AsyncEffectType.Memo) as MemoAsyncEffect;

    const fEqual = f === effect.f;
    const argsEqual = arrayStrictEquality(args, effect.args);

    if (fEqual && argsEqual) {
      return effect.value as T;
    } else {
      const value = f(...args);
      effect.f = f;
      effect.args = args;
      effect.value = value;
      return value;
    }
  }
}

class AsynchronousObserver<T> extends AbstractDelegatingObserver<unknown, T> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly scheduleComputation: SideEffect1<ObserverLike<T>>,
    isDone: Factory<boolean>,
    private readonly effect: AwaitAsyncEffect,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      if (isDone()) {
        pipe(delegate, dispose());
      }
    });
  }

  notify(next: unknown) {
    assertObserverState(this);
    this.effect.value = next;
    this.scheduleComputation(this.delegate);
  }
}

const hasOutstandingEffects = (effects: readonly AsyncEffect[]) => {
  const effectsLength = effects.length;

  for (let i = 0; i < effectsLength; i++) {
    const effect = effects[i];

    if (effect.type === AsyncEffectType.Await) {
      const { subscription } = effect;
      const effectIsOutstanding =
        isNone(subscription) || !subscription.isDisposed;

      if (effectIsOutstanding) {
        return true;
      }
    }
  }

  return false;
};

let currentCtx: Option<AsyncContextLike> = none;

export const async = <T>(computation: Factory<T>): ObservableLike<T> => {
  const factory = () => {
    const effects: AsyncEffect[] = [];
    let initialized = false;
    let scheduledComputationSubscription = disposed;

    const isDone = () => {
      return !hasOutstandingEffects(effects) && scheduledComputationSubscription.isDisposed
    };

    const scheduleComputation = (observer: ObserverLike<T>) => {
      if (scheduledComputationSubscription.isDisposed) {
        scheduledComputationSubscription = pipe(
          observer,
          schedule(runComputation),
        );
      }
    };

    const runComputation = (observer: ObserverLike<T>) => {
      const ctx = !initialized
        ? new InitialAsyncContextImpl(effects)
        : new AsyncContextImpl(effects);
      initialized = true;

      let result: Option<T> = none;

      currentCtx = ctx;
      try {
        result = computation();
      } catch (e) {
        currentCtx = none;
        throw e;
      }

      observer.notify(result);

      if (!hasOutstandingEffects(effects)) {
        pipe(observer, dispose());
      } else {
        const effectsLength = effects.length;

        for (let i = 0; i < effectsLength; i++) {
          const effect = effects[i];

          if (
            effect.type === AsyncEffectType.Await &&
            isNone(effect.subscription)
          ) {
            const innerObserver = new AsynchronousObserver(
              observer,
              scheduleComputation,
              isDone,
              effect,
            );
            const { observable } = effect;

            pipe(observable, observe(innerObserver));
            effect.subscription = innerObserver;
          }
        }
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

export const __await = <T>(observable: ObservableLike<T>): Option<T> => {
  const ctx = assertCurrentContext();
  return ctx.await(observable);
};
