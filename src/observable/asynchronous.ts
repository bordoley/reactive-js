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
  pipe,
  SideEffect,
} from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { Option, none, isNone } from "../option";
import { observe, defer } from "./observable";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { schedule } from "../scheduler";
import { takeLast } from "./takeLast";

export interface AsyncContextLike {
  await<T>(observable: ObservableLike<T>): Option<T>;
  memo<T>(f: Factory<T>): T;
  memo<TA, T>(f: Function1<TA, T>, a: TA): T;
  memo<TA, TB, T>(f: Function2<TA, TB, T>, a: TA, b: TB): T;
  memo<TA, TB, TC, T>(f: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
  memo<TA, TB, TC, TD, T>(
    f: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  memo<TA, TB, TC, TD, TE, T>(
    f: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
}

export const enum AsyncEffectType {
  Await = 1,
  Memo = 2,
}

type AsyncEffect =
  | {
      type: AsyncEffectType.Await;
      observable: ObservableLike<unknown>;
      subscription: Option<DisposableLike>;
      value: Option<unknown>;
    }
  | {
      type: AsyncEffectType.Memo;
      f: (...args: any[]) => unknown;
      args: any[];
      value: unknown;
    };

const arrayStrictEquality = arrayEquality();

class InitialAsyncContextImpl implements AsyncContextLike {
  constructor(private readonly effects: AsyncEffect[]) {}

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const value = f(...args);
    this.effects.push({ type: AsyncEffectType.Memo, f, args, value });
    return value;
  }

  await<T>(observable: ObservableLike<T>): Option<T> {
    this.effects.push({
      type: AsyncEffectType.Await,
      observable,
      subscription: none,
      value: none,
    });
    return none;
  }
}

class AsyncContextImpl implements AsyncContextLike {
  private index = 0;

  constructor(private readonly effects: readonly AsyncEffect[]) {}

  await<T>(observable: ObservableLike<T>): Option<T> {
    const effects = this.effects;
    const index = this.index;
    if (index >= effects.length) {
      throw "out of order";
    }

    const effect = effects[index];
    this.index++;

    if (effect.type !== AsyncEffectType.Await) {
      throw "out of order";
    }

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
    const effects = this.effects;
    const index = this.index;
    if (index >= effects.length) {
      throw "out of order";
    }

    const effect = effects[index];
    this.index++;

    if (effect.type !== AsyncEffectType.Memo) {
      throw "out of order";
    }

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
    private readonly scheduleComputation: SideEffect,
    disposeIfDone: SideEffect,
    private readonly effect: AsyncEffect,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, disposeIfDone);
  }

  notify(next: unknown) {
    assertObserverState(this);
    this.effect.value = next;
    this.scheduleComputation();
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

export const async = <T>(
  computation: Function1<AsyncContextLike, T>,
): ObservableLike<T> => {
  const factory = () => (observer: ObserverLike<T>) => {
    const effects: AsyncEffect[] = [];
    let scheduledComputationSubscription = disposed;

    const disposeIfDone = () => {
      if (
        !hasOutstandingEffects(effects) &&
        scheduledComputationSubscription.isDisposed
      ) {
        pipe(observer, dispose());
      }
    };

    const scheduledCallback = () => {
      const ctx = new AsyncContextImpl(effects);
      runComputation(ctx);
    };

    const scheduleComputation = () => {
      if (scheduledComputationSubscription.isDisposed) {
        scheduledComputationSubscription = pipe(
          observer,
          schedule(scheduledCallback),
        );
      }
    };

    const runComputation = (ctx: AsyncContextLike) => {
      const result = computation(ctx);
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
            disposeIfDone,
            effect,
          );
          pipe(effect.observable, takeLast(), observe(innerObserver));
          effect.subscription = innerObserver;
        }
      }

      observer.notify(result);

      if (!hasOutstandingEffects(effects)) {
        pipe(observer, dispose());
      }
    };

    const ctx = new InitialAsyncContextImpl(effects);
    runComputation(ctx);
  };
  return pipe(defer(factory), takeLast());
};
