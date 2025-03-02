import {
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  Tuple2,
  Tuple3,
  Tuple4,
  Updater,
} from "./functions.js";

export const ComputationLike_isPure = Symbol("ComputationLike_isPure");
export const ComputationLike_isDeferred = Symbol("ComputationLike_isDeferred");
export const ComputationLike_isSynchronous = Symbol(
  "ComputationLike_isSynchronous",
);
export const ComputationLike_isInteractive = Symbol(
  "ComputationLike_isInteractive",
);

export interface ComputationLike {
  // defaults to true when not specified so that Arrays are classified as PureIterables
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isSynchronous]?: boolean;
  readonly [ComputationLike_isDeferred]?: boolean;
  readonly [ComputationLike_isInteractive]?: boolean;
}

export interface ComputationWithSideEffectsLike extends ComputationLike {
  readonly [ComputationLike_isPure]: false;
}

export interface PureComputationLike extends ComputationLike {
  readonly [ComputationLike_isPure]?: true;
}

export interface DeferredComputationLike extends ComputationLike {
  readonly [ComputationLike_isDeferred]?: true;
}

export interface PureDeferredComputationLike extends DeferredComputationLike {
  readonly [ComputationLike_isPure]?: true;
}

export interface DeferredComputationWithSideEffectsLike
  extends DeferredComputationLike {
  readonly [ComputationLike_isPure]: false;
}

export interface SynchronousComputationLike extends DeferredComputationLike {
  readonly [ComputationLike_isSynchronous]?: true;
}

export interface PureSynchronousComputationLike
  extends SynchronousComputationLike {
  readonly [ComputationLike_isPure]?: true;
}

export interface SynchronousComputationWithSideEffectsLike
  extends SynchronousComputationLike {
  readonly [ComputationLike_isPure]: false;
}

export interface InteractiveComputationLike extends SynchronousComputationLike {
  readonly [ComputationLike_isInteractive]?: true;
}

export interface ReactiveComputationLike extends ComputationLike {
  readonly [ComputationLike_isInteractive]: false;
}

export interface SynchronousReactiveComputation
  extends SynchronousComputationLike,
    ReactiveComputationLike {
  readonly [ComputationLike_isDeferred]?: true;
  readonly [ComputationLike_isInteractive]: false;
  readonly [ComputationLike_isSynchronous]?: true;
}

export interface MulticastComputationLike extends ComputationLike {
  readonly [ComputationLike_isSynchronous]: false;
  readonly [ComputationLike_isDeferred]: false;
  readonly [ComputationLike_isPure]?: true;
}

export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");

/**
 * @noInheritDoc
 */
export interface Computation {
  readonly [Computation_T]?: unknown;
  readonly [Computation_type]?: unknown;
}

export type ComputationOf<
  Type extends ComputationLike,
  TComputation extends Computation,
  T,
> = TComputation extends {
  readonly [Computation_type]?: unknown;
}
  ? NonNullable<
      (TComputation & {
        readonly [Computation_T]: T;
      })[typeof Computation_type] &
        Pick<
          Type,
          | typeof ComputationLike_isPure
          | typeof ComputationLike_isDeferred
          | typeof ComputationLike_isSynchronous
          | typeof ComputationLike_isInteractive
        >
    >
  : {
      readonly _C: TComputation;
      readonly _T: () => T;
    };

export type ComputationOperator<
  Type extends ComputationLike,
  TComputation extends Computation,
  TA,
  TB,
> = Function1<
  ComputationOf<Type, TComputation, TA>,
  ComputationOf<Type, TComputation, TB>
>;

export type ComputationWithSideEffectsOperator<
  Type extends ComputationLike,
  TComputation extends Computation,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  TComputationWithSideEffects extends Computation,
  TA,
  TB,
> = Function1<
  ComputationOf<Type, TComputation, TA>,
  ComputationOf<TypeWithSideEffects, TComputationWithSideEffects, TB>
>;

export interface ComputationModule<
  Type extends ComputationLike,
  TComputation extends Computation,
> {
  keep<T>(
    predicate: Predicate<T>,
  ): ComputationOperator<Type, TComputation, T, T>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): ComputationOperator<Type, TComputation, TA, TB>;
}

export interface ComputationWithSideEffectsModule<
  Type extends ComputationLike,
  TComputation extends Computation,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  ComputationWithSideEffect extends Computation,
> {
  forEach<T>(
    sideEffect: SideEffect1<T>,
  ): ComputationWithSideEffectsOperator<
    Type,
    TComputation,
    TypeWithSideEffects,
    ComputationWithSideEffect,
    T,
    T
  >;
}

export interface DeferredComputationModule<
  Type extends DeferredComputationLike,
  TComputation extends Computation,
> extends ComputationModule<Type, TComputation> {
  catchError<T>(
    onError: SideEffect1<Error>,
  ): ComputationOperator<Type, TComputation, T, T>;
  catchError<T>(
    onError: Function1<Error, ComputationOf<Type, TComputation, T>>,
  ): ComputationOperator<Type, TComputation, T, T>;

  concatAll<T>(): ComputationOperator<
    Type,
    TComputation,
    ComputationOf<Type, TComputation, T>,
    T
  >;

  concatMany<T>(
    computations: readonly ComputationOf<Type, TComputation, T>[],
  ): ComputationOf<Type, TComputation, T>;

  empty<T>(): ComputationOf<Type, TComputation, T>;

  fromIterable<
    T,
    TIterable extends IterableLike<T> = IterableLike<T>,
  >(): Function1<
    TIterable,
    // FIXME: they type of iterable should impact whether the computatiosn is pure or not
    ComputationOf<Type, TComputation, T>
  >;

  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<readonly T[], ComputationOf<Type, TComputation, T>>;

  fromValue<T>(): Function1<T, ComputationOf<Type, TComputation, T>>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly count?: number;
    },
  ): ComputationOf<Type, TComputation, T>;

  raise<T>(options?: {
    readonly raise?: Factory<unknown>;
  }): ComputationOf<Type, TComputation, T>;

  repeat<T>(
    predicate: Predicate<number>,
  ): ComputationOperator<Type, TComputation, T, T>;
  repeat<T>(count: number): ComputationOperator<Type, TComputation, T, T>;
  repeat<T>(): ComputationOperator<Type, TComputation, T, T>;

  retry<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ): ComputationOperator<Type, TComputation, T, T>;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ComputationOperator<Type, TComputation, T, TAcc>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<Type, TComputation, T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): ComputationOperator<Type, TComputation, T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): ComputationOperator<Type, TComputation, T, T>;
}

export interface SynchronousComputationModule<
  Type extends SynchronousComputationLike,
  TComputation extends Computation,
> {
  last<T>(): Function1<ComputationOf<Type, TComputation, T>, Optional<T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<ComputationOf<Type, TComputation, T>, TAcc>;

  toRunnable<T>(): Function1<
    ComputationOf<Type, TComputation, T>,
    RunnableLike<T>
  >;

  toReadonlyArray<T>(): Function1<
    ComputationOf<Type, TComputation, T>,
    ReadonlyArray<T>
  >;
}

export interface InteractiveComputationModule<
  Type extends InteractiveComputationLike,
  TComputation extends Computation,
> {
  zip<TA, TB>(
    a: ComputationOf<Type, TComputation, TA>,
    b: ComputationOf<Type, TComputation, TB>,
  ): ComputationOf<Type, TComputation, Tuple2<TA, TB>>;
  zip<TA, TB, TC>(
    a: ComputationOf<Type, TComputation, TA>,
    b: ComputationOf<Type, TComputation, TB>,
    c: ComputationOf<Type, TComputation, TC>,
  ): ComputationOf<Type, TComputation, Tuple3<TA, TB, TC>>;
  zip<TA, TB, TC, TD>(
    a: ComputationOf<Type, TComputation, TA>,
    b: ComputationOf<Type, TComputation, TB>,
    c: ComputationOf<Type, TComputation, TC>,
    d: ComputationOf<Type, TComputation, TD>,
  ): ComputationOf<Type, TComputation, Tuple4<TA, TB, TC, TD>>;
}

export interface DeferredReactiveComputationModule<
  Type extends DeferredComputationLike & ReactiveComputationLike,
  TComputation extends Computation,
> {
  buffer<T>(options?: {
    count?: number;
  }): ComputationOperator<Type, TComputation, T, readonly T[]>;

  decodeWithCharset(options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }): ComputationOperator<Type, TComputation, ArrayBuffer, string>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ComputationOperator<Type, TComputation, T, T>;

  pairwise<T>(): ComputationOperator<Type, TComputation, T, Tuple2<T, T>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<Type, TComputation, T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<Type, TComputation, T, T>;
}

export interface ConcurrentReactiveComputationModule<
  Type extends ReactiveComputationLike,
  TComputation extends Computation,
> extends ComputationModule<Type, TComputation> {
  fromPromise<T>(): Function1<Promise<T>, ComputationOf<Type, TComputation, T>>;

  mergeMany<T>(
    eventSources: readonly ComputationOf<Type, TComputation, T>[],
  ): ComputationOf<Type, TComputation, T>;
}

export const SinkLike_next = Symbol("SinkLike_next");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isComplete = Symbol("SinkLike_isComplete");

/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> {
  readonly [SinkLike_isComplete]: boolean;

  /**
   * Notifies the EventListener of the next notification produced by the source.
   *
   * @param next - The next notification value.
   */
  [SinkLike_next](next: T): void;

  [SinkLike_complete](): void;
}

export const RunnableLike_eval = Symbol("RunnableLike_eval");

/**
 * Represents a deferred computation that is synchronously evaluated.
 */
export interface RunnableLike<T = unknown>
  extends SynchronousReactiveComputation {
  [RunnableLike_eval](sink: SinkLike<T>): void;
}

export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
  readonly [ComputationLike_isPure]?: true;
}

export interface RunnableWithSideEffectsLike<T = unknown>
  extends RunnableLike<T> {
  readonly [ComputationLike_isPure]: false;
}

export interface IterableLike<T = unknown>
  extends Iterable<T>,
    InteractiveComputationLike {}

export interface PureIterableLike<T = unknown> extends IterableLike<T> {
  readonly [ComputationLike_isPure]?: true;
}

export interface IterableWithSideEffectsLike<T = unknown>
  extends IterableLike<T> {
  readonly [ComputationLike_isPure]: false;
}

export const PureSynchronousComputationType: Pick<
  PureSynchronousComputationLike,
  | typeof ComputationLike_isDeferred
  | typeof ComputationLike_isPure
  | typeof ComputationLike_isSynchronous
> = {
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isPure]: true,
  [ComputationLike_isSynchronous]: true,
};

export const SynchronousComputationWithSideEffectsType: Pick<
  SynchronousComputationWithSideEffectsLike,
  | typeof ComputationLike_isDeferred
  | typeof ComputationLike_isPure
  | typeof ComputationLike_isSynchronous
> = {
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isPure]: false,
  [ComputationLike_isSynchronous]: true,
};

export const PureDeferredComputationType: Pick<
  PureDeferredComputationLike,
  | typeof ComputationLike_isDeferred
  | typeof ComputationLike_isPure
  | typeof ComputationLike_isSynchronous
> = {
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isPure]: true,
  [ComputationLike_isSynchronous]: false,
};

export const DeferredComputationWithSideEffectsType: Pick<
  DeferredComputationWithSideEffectsLike,
  | typeof ComputationLike_isDeferred
  | typeof ComputationLike_isPure
  | typeof ComputationLike_isSynchronous
> = {
  [ComputationLike_isDeferred]: true,
  [ComputationLike_isPure]: false,
  [ComputationLike_isSynchronous]: false,
};
