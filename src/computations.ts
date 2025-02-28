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

export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");

export const ComputationLike_isPure = Symbol("ComputationLike_isPure");
export const ComputationLike_isDeferred = Symbol("ComputationLike_isDeferred");
export const ComputationLike_isSynchronous = Symbol(
  "ComputationLike_isSynchronous",
);

export interface ComputationLike {
  // defaults to true when not specified so that Arrays are classified as PureIterables
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isSynchronous]?: boolean;
  readonly [ComputationLike_isDeferred]?: boolean;
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

export interface MulticastComputationLike extends ComputationLike {
  readonly [ComputationLike_isSynchronous]: false;
  readonly [ComputationLike_isDeferred]: false;
  readonly [ComputationLike_isPure]?: true;
}

/**
 * @noInheritDoc
 */
export interface Computation<_Type extends ComputationLike> {
  readonly [Computation_T]?: unknown;
  readonly [Computation_type]?: unknown;
}

export type ComputationOf<
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
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
        >
    >
  : {
      readonly _C: TComputation;
      readonly _T: () => T;
    };

export type ComputationOperator<
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
  TA,
  TB,
> = Function1<
  ComputationOf<Type, TComputation, TA>,
  ComputationOf<Type, TComputation, TB>
>;

export type ComputationWithSideEffectsOperator<
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  TComputationWithSideEffects extends Computation<TypeWithSideEffects>,
  TA,
  TB,
> = Function1<
  ComputationOf<Type, TComputation, TA>,
  ComputationOf<TypeWithSideEffects, TComputationWithSideEffects, TB>
>;

export interface DeferredComputationModule<
  Type extends DeferredComputationLike,
  TComputation extends Computation<Type>,
> {
  catchError<T>(
    onError: SideEffect1<Error>,
  ): ComputationOperator<Type, TComputation, T, T>;
  catchError<T>(
    onError: Function1<Error, ComputationOf<Type, TComputation, T>>,
  ): ComputationOperator<Type, TComputation, T, T>;

  concat<T>(
    fst: ComputationOf<Type, TComputation, T>,
    snd: ComputationOf<Type, TComputation, T>,
    ...tail: readonly ComputationOf<Type, TComputation, T>[]
  ): ComputationOf<Type, TComputation, T>;

  concatAll<T>(): ComputationOperator<
    Type,
    TComputation,
    ComputationOf<Type, TComputation, T>,
    T
  >;

  concatMap<TA, TB>(
    selector: Function1<TA, ComputationOf<Type, TComputation, TB>>,
  ): ComputationOperator<Type, TComputation, TA, TB>;

  concatMany<T>(
    computations: readonly [
      ComputationOf<Type, TComputation, T>,
      ...(readonly ComputationOf<Type, TComputation, T>[]),
    ],
  ): ComputationOf<Type, TComputation, T>;

  concatWith<T>(
    snd: ComputationOf<Type, TComputation, T>,
    ...tail: readonly ComputationOf<Type, TComputation, T>[]
  ): ComputationOperator<Type, TComputation, T, T>;

  empty<T>(): ComputationOf<Type, TComputation, T>;

  endWith<T>(
    value: T,
    ...values: readonly T[]
  ): ComputationOperator<Type, TComputation, T, T>;

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

  startWith<T>(
    value: T,
    ...values: readonly T[]
  ): ComputationOperator<Type, TComputation, T, T>;

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

export interface ComputationWithSideEffectsModule<
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  ComputationWithSideEffect extends Computation<TypeWithSideEffects>,
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

export interface ComputationModule<
  Type extends ComputationLike,
  TComputation extends Computation<Type>,
> {
  keep<T>(
    predicate: Predicate<T>,
  ): ComputationOperator<Type, TComputation, T, T>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): ComputationOperator<Type, TComputation, TA, TB>;
}

export interface SynchronousComputationModule<
  Type extends SynchronousComputationLike,
  TComputation extends Computation<Type>,
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
  Type extends DeferredComputationLike,
  TComputation extends Computation<Type>,
> {
  zip<TA, TB>(
    a: Iterable<TA>,
    b: Iterable<TB>,
  ): ComputationOf<Type, TComputation, Tuple2<TA, TB>>;
  zip<TA, TB, TC>(
    a: Iterable<TA>,
    b: Iterable<TB>,
    c: Iterable<TC>,
  ): ComputationOf<Type, TComputation, Tuple3<TA, TB, TC>>;
  zip<TA, TB, TC, TD>(
    a: Iterable<TA>,
    b: Iterable<TB>,
    c: Iterable<TC>,
    d: Iterable<TD>,
  ): ComputationOf<Type, TComputation, Tuple4<TA, TB, TC, TD>>;
}

export interface ReactiveComputationModule<
  Type extends DeferredComputationLike,
  TComputation extends Computation<Type>,
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

  ignoreElements<T>(): ComputationOperator<Type, TComputation, any, T>;

  pairwise<T>(): ComputationOperator<Type, TComputation, T, Tuple2<T, T>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<Type, TComputation, T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): ComputationOperator<Type, TComputation, T, T>;
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
export interface RunnableLike<T = unknown> extends SynchronousComputationLike {
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
    SynchronousComputationLike {}

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
