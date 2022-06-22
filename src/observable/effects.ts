import { empty } from "../container";
import {
  DisposableLike,
  Error,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
  disposed,
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
  ignore,
  pipe,
  raise,
} from "../functions";
import { ObservableEffectMode, ObservableLike } from "../observable";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerLike, schedule } from "../scheduler";
import { defer } from "./defer";
import { fromArrayT } from "./fromArray";
import { Observer } from "./observer";
import { subscribe } from "./subscribe";

const arrayStrictEquality = arrayEquality();

const enum EffectType {
  Memo = 1,
  Observe = 2,
  Using = 3,
}

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

let currentCtx: Option<ObservableContext> = none;

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
            observable: empty(fromArrayT),
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
    readonly scheduler: SchedulerLike,
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

          if (this.mode === "combine-latest") {
            this.runComputation();
          } else {
            const { scheduledComputationSubscription } = this;

            this.scheduledComputationSubscription =
              scheduledComputationSubscription.isDisposed
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

export const observable = <T>(
  computation: Factory<T>,
  { mode = "batched" }: { mode?: ObservableEffectMode } = {},
): ObservableLike<T> =>
  defer(() => (observer: Observer<T>) => {
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
        mode === "combine-latest" &&
        allObserveEffectsHaveValues &&
        hasOutstandingEffects;

      const hasError = isSome(error);

      const shouldNotify =
        !hasError && (combineLatestModeShouldNotify || mode === "batched");

      const shouldDispose = !hasOutstandingEffects || hasError;

      if (shouldNotify) {
        observer.notify(result as T);
      }

      if (shouldDispose) {
        observer.dispose(error);
      }
    };

    const ctx = new ObservableContext(observer, runComputation, mode);

    return runComputation();
  });

const assertCurrentContext = (): ObservableContext =>
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

  const scheduler = __currentScheduler();
  const observable = ctx.memo(deferSideEffect, f, ...args);
  const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
  ctx.using(subscribeOnScheduler, observable);
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
