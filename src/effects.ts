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
  raiseError,
  raiseWithDebugMessage,
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

const AsyncEffect_type = Symbol("AsyncEffect_type");

const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");

type MemoOrUsingEffect<T = unknown> = {
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
  [MemoOrUsingEffect_value]: T;
};

type MemoEffect = {
  readonly [AsyncEffect_type]: typeof Memo;
} & MemoOrUsingEffect;

type UsingEffect = {
  readonly [AsyncEffect_type]: typeof Using;
  [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
  [MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;

const AwaitOrObserveEffect_observable = Symbol(
  "AwaitOrObserveEffect_observable",
);
const AwaitOrObserveEffect_subscription = Symbol(
  "AwaitOrObserveEffect_subscription",
);
const AwaitOrObserveEffect_value = Symbol("AwaitOrObserveEffect_value");
const AwaitOrObserveEffect_hasValue = Symbol("AwaitOrObserveEffect_hasValue");
type AwaitOrObserveEffect = {
  [AwaitOrObserveEffect_observable]: ObservableLike;
  [AwaitOrObserveEffect_subscription]: DisposableLike;
  [AwaitOrObserveEffect_value]: Optional;
  [AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
  readonly [AsyncEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;

type AwaitEffect = {
  readonly [AsyncEffect_type]: typeof Await;
} & AwaitOrObserveEffect;

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
  const { [AsyncContext_effects]: effects, [AsyncContext_index]: index } = ctx;
  ctx[AsyncContext_index]++;

  const effect = effects[index];

  if (isNone(effect)) {
    const newEffect: AsyncEffect =
      type === Memo
        ? {
            [AsyncEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: none,
          }
        : type === Await || type === Observe
        ? {
            [AsyncEffect_type]: type,
            [AwaitOrObserveEffect_observable]: empty(),
            [AwaitOrObserveEffect_subscription]: disposed,
            [AwaitOrObserveEffect_value]: none,
            [AwaitOrObserveEffect_hasValue]: false,
          }
        : type === Using
        ? {
            [AsyncEffect_type]: type,
            [MemoOrUsingEffect_func]: ignore,
            [MemoOrUsingEffect_args]: [],
            [MemoOrUsingEffect_value]: disposed,
          }
        : raiseWithDebugMessage("invalid effect type");

    effects.push(newEffect);
    return newEffect;
  } else {
    return effect[AsyncEffect_type] === type
      ? effect
      : raiseWithDebugMessage("observable effect called out of order");
  }
}) as ValidateAsyncEffect;

const arrayStrictEquality = arrayEquality();

const awaiting = error();

const AsyncContext_index = Symbol("AsyncContext_index");
const AsyncContext_cleanup = Symbol("AsyncContext_cleanup");
const AsyncContext_effects = Symbol("AsyncContext_effects");
const AsyncContext_mode = Symbol("AsyncContext_mode");
const AsyncContext_observer = Symbol("AsyncContext_observer");
const AsyncContext_runComputation = Symbol("AsyncContext_runComputation");
const AsyncContext_scheduledComputationSubscription = Symbol(
  "AsyncContext_scheduledComputationSubscription",
);
const AsyncContext_awaitOrObserve = Symbol("AsyncContext_awaitOrObserve");
const AsyncContext_memoOrUse = Symbol("AsyncContext_memoOrUse");

class AsyncContext {
  [AsyncContext_index] = 0;
  readonly [AsyncContext_effects]: AsyncEffect[] = [];
  readonly [AsyncContext_observer]: ObserverLike;

  private [AsyncContext_scheduledComputationSubscription]: DisposableLike =
    disposed;
  private readonly [AsyncContext_runComputation]: () => void;
  private readonly [AsyncContext_mode]: EffectsMode;
  private readonly [AsyncContext_cleanup] = () => {
    const { [AsyncContext_effects]: effects } = this;

    const hasOutstandingEffects =
      effects.findIndex(
        effect =>
          (effect[AsyncEffect_type] === Await ||
            effect[AsyncEffect_type] === Observe) &&
          !isDisposed(effect[AwaitOrObserveEffect_subscription]),
      ) >= 0;

    if (
      !hasOutstandingEffects &&
      isDisposed(this[AsyncContext_scheduledComputationSubscription])
    ) {
      pipe(this[AsyncContext_observer], dispose());
    }
  };

  constructor(
    observer: ObserverLike,
    runComputation: () => void,
    mode: EffectsMode,
  ) {
    this[AsyncContext_observer] = observer;
    this[AsyncContext_runComputation] = runComputation;
    this[AsyncContext_mode] = mode;
  }

  [AsyncContext_awaitOrObserve]<T>(
    observable: ObservableLike<T>,
    shouldAwait: boolean,
  ): Optional<T> {
    const effect = shouldAwait
      ? validateAsyncEffect(this, Await)
      : validateAsyncEffect(this, Observe);

    if (effect[AwaitOrObserveEffect_observable] === observable) {
      return effect[AwaitOrObserveEffect_value] as T;
    } else {
      pipe(effect[AwaitOrObserveEffect_subscription], dispose());

      const {
        [AsyncContext_observer]: observer,
        [AsyncContext_runComputation]: runComputation,
      } = this;
      const scheduler = getScheduler(observer);

      const subscription = pipe(
        observable,
        forEach<T>(next => {
          effect[AwaitOrObserveEffect_value] = next;
          effect[AwaitOrObserveEffect_hasValue] = true;

          if (this[AsyncContext_mode] === "combine-latest") {
            runComputation();
          } else {
            let {
              [AsyncContext_scheduledComputationSubscription]:
                scheduledComputationSubscription,
            } = this;

            this[AsyncContext_scheduledComputationSubscription] = isDisposed(
              scheduledComputationSubscription,
            )
              ? pipe(observer, schedule(runComputation))
              : scheduledComputationSubscription;
          }
        }),
        subscribe(scheduler),
        addTo(observer),
        onComplete(this[AsyncContext_cleanup]),
      );

      effect[AwaitOrObserveEffect_observable] = observable;
      effect[AwaitOrObserveEffect_subscription] = subscription;
      effect[AwaitOrObserveEffect_value] = none;
      effect[AwaitOrObserveEffect_hasValue] = false;

      return shouldAwait ? raiseError(awaiting) : none;
    }
  }

  [AsyncContext_memoOrUse]<T>(
    shouldUse: false,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [AsyncContext_memoOrUse]<T extends DisposableLike>(
    shouldUse: true,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T;
  [AsyncContext_memoOrUse]<T>(
    shouldUse: boolean,
    f: (...args: any[]) => T,
    ...args: unknown[]
  ): T {
    const effect = shouldUse
      ? validateAsyncEffect(this, Using)
      : validateAsyncEffect(this, Memo);

    if (
      f === effect[MemoOrUsingEffect_func] &&
      arrayStrictEquality(args, effect[MemoOrUsingEffect_args])
    ) {
      return effect[MemoOrUsingEffect_value] as T;
    } else {
      if (shouldUse) {
        pipe(effect[MemoOrUsingEffect_value] as DisposableLike, dispose());
      }

      const value = f(...args);
      effect[MemoOrUsingEffect_func] = f;
      effect[MemoOrUsingEffect_args] = args;
      effect[MemoOrUsingEffect_value] = value;

      if (shouldUse) {
        pipe(value as DisposableLike, addTo(this[AsyncContext_observer]));
      }

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
      ctx[AsyncContext_index] = 0;

      const { [AsyncContext_effects]: effects } = ctx;
      const effectsLength = getLength(effects);

      // Inline this for perf
      let allObserveEffectsHaveValues = true;
      let hasOutstandingEffects = false;
      for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        const { [AsyncEffect_type]: type } = effect;

        if (
          (type === Await || type === Observe) &&
          !(effect as AwaitOrObserveEffect)[AwaitOrObserveEffect_hasValue]
        ) {
          allObserveEffectsHaveValues = false;
        }

        if (
          (type === Await || type === Observe) &&
          !isDisposed(
            (effect as ObserveEffect)[AwaitOrObserveEffect_subscription],
          )
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
    ? raiseWithDebugMessage(
        "effect must be called within a computational expression",
      )
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
  return ctx[AsyncContext_memoOrUse](false, f, ...args);
};

export const __await = <T>(observable: ObservableLike<T>): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, true) as T;
};

export const __observe = <T>(observable: ObservableLike<T>): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, false);
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

    const scheduler = getScheduler(ctx[AsyncContext_observer]);
    const observable = ctx[AsyncContext_memoOrUse](
      false,
      deferSideEffect,
      f,
      ...args,
    );
    const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](
      false,
      subscribe,
      scheduler,
    );
    ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
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
  return ctx[AsyncContext_memoOrUse](true, f, ...args);
};

export function __currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return getScheduler(ctx[AsyncContext_observer]);
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
