import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  DisposableLike,
  dispose,
} from "../disposable";
import {
  arrayEquality,
  Factory,
  Function1,
  Function2,
  pipe,
} from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { Option, none, isNone } from "../option";
import { observe, defer } from "./observable";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { keep } from "../readonlyArray";

export interface AsyncContext {
  memo<T>(f: Factory<T>): T;
  memo<TA, T>(f: Function1<TA, T>, a: TA): T;
  memo<TA, TB, T>(f: Function2<TA, TB, T>, a: TA, b: TB): T;
  observe<T>(observable: ObservableLike<T>): Option<T>;
}

export const enum AsyncEffectType {
  Memo = 1,
  Observe = 2,
}

type AsyncEffect =
  | {
      type: AsyncEffectType.Memo;
      f: (...args: any[]) => unknown;
      args: any[];
      value: unknown;
    }
  | {
      type: AsyncEffectType.Observe;
      observable: ObservableLike<unknown>;
      subscription: Option<DisposableLike>;
      value: Option<unknown>;
    };

const arrayStrictEquality = arrayEquality();

class InitialAsyncContextImpl implements AsyncContext {
  readonly effects: AsyncEffect[] = [];

  memo<T>(f: (...args: any[]) => T, ...args: any[]): T {
    const value = f(...args);
    this.effects.push({ type: AsyncEffectType.Memo, f, args, value });
    return value;
  }

  observe<T>(observable: ObservableLike<T>): Option<T> {
    this.effects.push({
      type: AsyncEffectType.Observe,
      observable,
      subscription: none,
      value: none,
    });
    return none;
  }
}

class AsyncContextImpl implements AsyncContext {
  private index = 0;

  constructor(private readonly effects: readonly AsyncEffect[]) {}

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

  observe<T>(observable: ObservableLike<T>): Option<T> {
    const effects = this.effects;
    const index = this.index;
    if (index >= effects.length) {
      throw "out of order";
    }

    const effect = effects[index];
    this.index++;

    if (effect.type !== AsyncEffectType.Observe) {
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
}

const remainingObserveEffectFilter = (effect: AsyncEffect): boolean => {
  if (effect.type === AsyncEffectType.Observe) {
    const subscription = effect.subscription;
    // if we're running in a computation, the subscription may be none
    // and will be subscribed to after the computation completes.
    return isNone(subscription) || !subscription.isDisposed;
  } else {
    return false;
  }
};

class AsynchronousObserver<T> extends AbstractDelegatingObserver<unknown, T> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly computation: Function1<AsyncContext, T>,
    private readonly effects: readonly AsyncEffect[],
    private readonly index: number,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      const remainingObserveEffects = pipe(
        this.effects,
        keep(remainingObserveEffectFilter),
      );
      if (remainingObserveEffects.length === 0) {
        pipe(delegate, dispose());
      }
    });
  }

  notify(next: unknown) {
    assertObserverState(this);

    const computation = this.computation;
    const effects = this.effects;

    effects[this.index].value = next;

    const ctx = new AsyncContextImpl(effects);
    const result = computation(ctx);

    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];

      if (
        effect.type === AsyncEffectType.Observe &&
        isNone(effect.subscription)
      ) {
        const innerObserver = new AsynchronousObserver(
          this.delegate,
          computation,
          effects,
          i,
        );
        pipe(effect.observable, observe(innerObserver));
        effect.subscription = innerObserver;
      }
    }

    this.delegate.notify(result);
  }
}

export const async = <T>(
  computation: Function1<AsyncContext, T>,
): ObservableLike<T> => {
  const factory = () => (observer: ObserverLike<T>) => {
    const ctx = new InitialAsyncContextImpl();
    const result = computation(ctx);
    const effects = ctx.effects;

    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];

      if (effect.type === AsyncEffectType.Observe) {
        const innerObserver = new AsynchronousObserver(
          observer,
          computation,
          effects,
          i,
        );
        pipe(effect.observable, observe(innerObserver));
        effect.subscription = innerObserver;
      }
    }

    observer.notify(result);
  };
  return defer(factory);
};
