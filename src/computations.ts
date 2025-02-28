import {
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  Tuple2,
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

export interface SynchronousComputationLike extends DeferredComputationLike {
  readonly [ComputationLike_isSynchronous]?: true;
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
  C extends Computation<Type>,
  T,
> = C extends {
  readonly [Computation_type]?: unknown;
}
  ? NonNullable<
      (C & {
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
      readonly _C: C;
      readonly _T: () => T;
    };

export type PureComputationOperator<
  Type extends ComputationLike,
  C extends Computation<Type>,
  TA,
  TB,
> = Function1<ComputationOf<Type, C, TA>, ComputationOf<Type, C, TB>>;

export type ComputationWithSideEffectsOperator<
  Type extends ComputationLike,
  C extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  CWithSideEffects extends Computation<TypeWithSideEffects>,
  TA,
  TB,
> = Function1<
  ComputationOf<Type, C, TA>,
  ComputationOf<TypeWithSideEffects, CWithSideEffects, TB>
>;

export interface DeferredComputationModule<
  Type extends ComputationLike,
  C extends Computation<Type>,
> {
  catchError<T>(
    onError: SideEffect1<Error>,
  ): PureComputationOperator<Type, C, T, T>;
  catchError<T>(
    onError: Function1<Error, ComputationOf<Type, C, T>>,
  ): PureComputationOperator<Type, C, T, T>;

  concat<T>(
    fst: ComputationOf<Type, C, T>,
    snd: ComputationOf<Type, C, T>,
    ...tail: readonly ComputationOf<Type, C, T>[]
  ): ComputationOf<Type, C, T>;

  concatAll<T>(): PureComputationOperator<
    Type,
    C,
    ComputationOf<Type, C, T>,
    T
  >;

  concatMap<TA, TB>(
    selector: Function1<TA, ComputationOf<Type, C, TB>>,
  ): PureComputationOperator<Type, C, TA, TB>;

  concatMany<T>(
    computations: readonly [
      ComputationOf<Type, C, T>,
      ...(readonly ComputationOf<Type, C, T>[]),
    ],
  ): ComputationOf<Type, C, T>;

  concatWith<T>(
    snd: ComputationOf<Type, C, T>,
    ...tail: readonly ComputationOf<Type, C, T>[]
  ): PureComputationOperator<Type, C, T, T>;

  empty<T>(): ComputationOf<Type, C, T>;

  endWith<T>(
    value: T,
    ...values: readonly T[]
  ): PureComputationOperator<Type, C, T, T>;

  fromIterable<
    T,
    TIterable extends IterableLike<T> = IterableLike<T>,
  >(): Function1<
    TIterable,
    // FIXME: they type of iterable should impact whether the computatiosn is pure or not
    ComputationOf<Type, C, T>
  >;

  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<readonly T[], ComputationOf<Type, C, T>>;

  fromValue<T>(): Function1<T, ComputationOf<Type, C, T>>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly count?: number;
    },
  ): ComputationOf<Type, C, T>;

  raise<T>(options?: {
    readonly raise?: Factory<unknown>;
  }): ComputationOf<Type, C, T>;

  repeat<T>(
    predicate: Predicate<number>,
  ): PureComputationOperator<Type, C, T, T>;
  repeat<T>(count: number): PureComputationOperator<Type, C, T, T>;
  repeat<T>(): PureComputationOperator<Type, C, T, T>;

  retry<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ): PureComputationOperator<Type, C, T, T>;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): PureComputationOperator<Type, C, T, TAcc>;

  startWith<T>(
    value: T,
    ...values: readonly T[]
  ): PureComputationOperator<Type, C, T, T>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): PureComputationOperator<Type, C, T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): PureComputationOperator<Type, C, T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): PureComputationOperator<Type, C, T, T>;
}

export interface ComputationWithSideEffectsModule<
  Type extends ComputationLike,
  C extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  ComputationWithSideEffect extends Computation<TypeWithSideEffects>,
> {
  forEach<T>(
    sideEffect: SideEffect1<T>,
  ): ComputationWithSideEffectsOperator<
    Type,
    C,
    TypeWithSideEffects,
    ComputationWithSideEffect,
    T,
    T
  >;
}

export interface PureStatelessComputationModule<
  Type extends ComputationLike,
  C extends Computation<Type>,
> {
  keep<T>(predicate: Predicate<T>): PureComputationOperator<Type, C, T, T>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): PureComputationOperator<Type, C, TA, TB>;
}

export interface SynchronousComputationModule<
  Type extends SynchronousComputationLike,
  C extends Computation<Type>,
> {
  last<T>(): Function1<ComputationOf<Type, C, T>, Optional<T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<ComputationOf<Type, C, T>, TAcc>;

  toDeferable<T>(): Function1<ComputationOf<Type, C, T>, DeferableLike<T>>;

  toReadonlyArray<T>(): Function1<ComputationOf<Type, C, T>, ReadonlyArray<T>>;
}

export interface PureStatefulComputationModule<
  Type extends ComputationLike,
  C extends Computation<Type>,
> {
  buffer<T>(options?: {
    count?: number;
  }): PureComputationOperator<Type, C, T, readonly T[]>;

  decodeWithCharset(options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }): PureComputationOperator<Type, C, ArrayBuffer, string>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): PureComputationOperator<Type, C, T, T>;

  ignoreElements<T>(): PureComputationOperator<Type, C, any, T>;

  pairwise<T>(): PureComputationOperator<Type, C, T, Tuple2<T, T>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): PureComputationOperator<Type, C, T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): PureComputationOperator<Type, C, T, T>;
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

export const DeferableLike_eval = Symbol("DeferableLike_eval");

/**
 * Represents a deferred computation that is synchronously evaluated.
 */
export interface DeferableLike<T = unknown> extends SynchronousComputationLike {
  [ComputationLike_isPure]: boolean;
  [DeferableLike_eval](sink: SinkLike<T>): void;
}

export interface PureDeferableLike<T = unknown> extends DeferableLike<T> {
  readonly [ComputationLike_isPure]: true;
}

export interface DeferableWithSideEffectsLike<T = unknown>
  extends DeferableLike<T> {
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
