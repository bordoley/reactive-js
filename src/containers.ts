import {
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
} from "./functions";
import { DisposableLike } from "./util";

/**  @ignore */
export const ContainerLike_T = Symbol("ContainerLike_T");

/**  @ignore */
export const ContainerLike_type = Symbol("ContainerLike_type");

/**
 * @category Container
 */
export interface ContainerLike {
  readonly [ContainerLike_T]?: unknown;
  readonly [ContainerLike_type]?: unknown;
}

/**
 * @category Container
 */
export interface AsyncIterableLike<T = unknown>
  extends ContainerLike,
    AsyncIterable<T> {
  readonly [ContainerLike_type]?: AsyncIterableLike<
    this[typeof ContainerLike_T]
  >;
}

/**
 * @category Container
 */
export interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
  readonly [ContainerLike_type]?: IterableLike<this[typeof ContainerLike_T]>;
}

/**
 * @category Container
 */
export interface PromiseableLike<T = unknown>
  extends ContainerLike,
    PromiseLike<T> {
  readonly [ContainerLike_type]?: PromiseableLike<this[typeof ContainerLike_T]>;
}

/**
 * @category Container
 */
export interface ReadonlyArrayLike<T = unknown>
  extends ContainerLike,
    ReadonlyArray<T> {
  readonly [ContainerLike_type]?: ReadonlyArrayLike<
    this[typeof ContainerLike_T]
  >;
}

/**  @ignore */
export const SequenceLike_data = Symbol("SequenceLike_data");

/**  @ignore */
export const SequenceLike_next = Symbol("SequenceLike_next");

/**
 * @category Container
 */
export interface SequenceLike<T = unknown> extends ContainerLike {
  readonly [ContainerLike_type]?: SequenceLike<this[typeof ContainerLike_T]>;

  (): Optional<{
    readonly [SequenceLike_data]: T;
    readonly [SequenceLike_next]: SequenceLike<T>;
  }>;
}

/**  @ignore */
export const StatefulContainerLike_state = Symbol(
  "StatefulContainerLike_state",
);

/**
 * @category Container
 */
export interface StatefulContainerLike extends ContainerLike {
  readonly [StatefulContainerLike_state]?: DisposableLike;
}

export type ContainerOf<C extends ContainerLike, T> = C extends {
  readonly [ContainerLike_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [ContainerLike_T]: T;
      })[typeof ContainerLike_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type ContainerOperator<C extends ContainerLike, TA, TB> = Function1<
  ContainerOf<C, TA>,
  ContainerOf<C, TB>
>;

/**
 * @category TypeClass
 */
export interface Container<C extends ContainerLike> {
  readonly ContainerLike_type?: C;
}

/**
 * @category TypeClass
 */
export interface Buffer<C extends ContainerLike, O = unknown>
  extends Container<C> {
  buffer: <T>(
    options?: O & {
      readonly maxBufferSize?: number;
    },
  ) => ContainerOperator<C, T, readonly T[]>;
}

/**
 * @category TypeClass
 */
export interface CatchError<C extends ContainerLike, O = never>
  extends Container<C> {
  catchError<T>(
    onError: Function1<unknown, ContainerOf<C, T> | void>,
    options?: O,
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface Concat<C extends ContainerLike> extends Container<C> {
  concat<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;
}

/**
 * @category TypeClass
 */
export interface ConcatAll<C extends ContainerLike, O = never>
  extends Container<C> {
  concatAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}

/**
 * @category TypeClass
 */
export interface DecodeWithCharset<C extends ContainerLike, O = unknown>
  extends Container<C> {
  decodeWithCharset(
    options?: O & {
      charset?: string;
    },
  ): ContainerOperator<C, ArrayBuffer, string>;
}

/**
 * @category TypeClass
 */
export interface Defer<C extends ContainerLike, O = never>
  extends Container<C> {
  defer<T>(factory: Factory<ContainerOf<C, T>>, options?: O): ContainerOf<C, T>;
}

/**
 * @category TypeClass
 */
export interface DistinctUntilChanged<C extends ContainerLike, O = unknown>
  extends Container<C> {
  distinctUntilChanged<T>(
    options?: O & {
      readonly equality?: Equality<T>;
    },
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface EverySatisfy<C extends ContainerLike, O = never>
  extends Container<C> {
  everySatisfy<T>(
    predicate: Predicate<T>,
    options?: O,
  ): ContainerOperator<C, T, boolean>;
}

/**
 * @category TypeClass
 */
export interface Empty<C extends ContainerLike, O = never>
  extends Container<C> {
  empty<T>(options?: O): ContainerOf<C, T>;
}

/**
 * @category TypeClass
 */
export interface ForEach<C extends ContainerLike, O = never>
  extends Container<C> {
  forEach<T>(effect: SideEffect1<T>, options?: O): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface ForkConcat<C extends ContainerLike> extends Container<C> {
  forkConcat<TIn, TOut>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}

/**
 * @category TypeClass
 */
export interface ForkZip<C extends ContainerLike> extends Container<C> {
  forkZip<T, TA, TB>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
  ): ContainerOperator<C, T, readonly [TA, TB]>;
  forkZip<T, TA, TB, TC>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC]>;
  forkZip<T, TA, TB, TC, TD>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
  forkZip<T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkZip<T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
    i: ContainerOperator<C, T, TI>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @category TypeClass
 */
export interface FromReadonlyArray<C extends ContainerLike, O = unknown>
  extends Container<C> {
  fromReadonlyArray<T>(
    options?: O & {
      readonly start?: number;
      readonly count?: number;
    },
  ): Function1<readonly T[], ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface FromAsyncIterable<C extends ContainerLike, O = never>
  extends Container<C> {
  fromAsyncIterable<T>(
    options?: O,
  ): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface FromIterable<C extends ContainerLike, O = never>
  extends Container<C> {
  fromIterable<T>(options?: O): Function1<Iterable<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface FromSequence<C extends ContainerLike, O = never>
  extends Container<C> {
  fromSequence<T>(options?: O): Function1<SequenceLike<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface FromReadonlySet<C extends ContainerLike, O = never>
  extends Container<C> {
  fromReadonlySet<T>(options?: O): Function1<ReadonlySet<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface Generate<C extends ContainerLike, O = never>
  extends Container<C> {
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: O,
  ): ContainerOf<C, T>;
}

/**
 * @category TypeClass
 */
export interface Keep<C extends ContainerLike, O = never> extends Container<C> {
  keep<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface Map<C extends ContainerLike, O = never> extends Container<C> {
  map<TA, TB>(
    mapper: Function1<TA, TB>,
    options?: O,
  ): ContainerOperator<C, TA, TB>;
}

/**
 * @category TypeClass
 */
export interface Never<C extends StatefulContainerLike, O = never>
  extends Container<C> {
  never<T>(options?: O): ContainerOf<C, T>;
}

/**
 * @category TypeClass
 */
export interface Pairwise<C extends ContainerLike, O = never>
  extends Container<C> {
  pairwise<T>(options?: O): ContainerOperator<C, T, readonly [T, T]>;
}

/**
 * @category TypeClass
 */
export interface Reduce<C extends ContainerLike, O = never>
  extends Container<C> {
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: O,
  ): ContainerOperator<C, T, TAcc>;
}

/**
 * @category TypeClass
 */
export interface Repeat<C extends ContainerLike, O = never>
  extends Container<C> {
  repeat<T>(
    predicate: Predicate<number>,
    options?: O,
  ): ContainerOperator<C, T, T>;
  repeat<T>(count: number, options?: O): ContainerOperator<C, T, T>;
  repeat<T>(options?: O): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface Scan<C extends ContainerLike, O = never> extends Container<C> {
  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: O,
  ): ContainerOperator<C, T, TAcc>;
}

/**
 * @category TypeClass
 */
export interface SkipFirst<C extends ContainerLike, O = unknown>
  extends Container<C> {
  skipFirst<T>(
    options?: O & {
      readonly count?: number;
    },
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface SomeSatisfy<C extends ContainerLike, O = never>
  extends Container<C> {
  someSatisfy<T>(
    predicate: Predicate<T>,
    options?: O,
  ): ContainerOperator<C, T, boolean>;
}

/**
 * @category TypeClass
 */
export interface TakeFirst<C extends ContainerLike, O = unknown>
  extends Container<C> {
  takeFirst<T>(
    options?: O & {
      readonly count?: number;
    },
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface TakeLast<C extends ContainerLike, O = unknown>
  extends Container<C> {
  takeLast<T>(
    options?: O & {
      readonly count?: number;
    },
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface TakeWhile<C extends ContainerLike, O = unknown>
  extends Container<C> {
  takeWhile<T>(
    predicate: Predicate<T>,
    options?: O & { readonly inclusive?: boolean },
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface ThrowIfEmpty<C extends ContainerLike, O = never>
  extends Container<C> {
  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: O,
  ): ContainerOperator<C, T, T>;
}

/**
 * @category TypeClass
 */
export interface ToAsyncIterable<C extends ContainerLike, O = never>
  extends Container<C> {
  toAsyncIterable<T>(
    options?: O,
  ): Function1<ContainerOf<C, T>, AsyncIterableLike<T>>;
}

/**
 * @category TypeClass
 */
export interface ToIterable<C extends ContainerLike, O = never>
  extends Container<C> {
  toIterable<T>(options?: O): Function1<ContainerOf<C, T>, IterableLike<T>>;
}

/**
 * @category TypeClass
 */
export interface ToReadonlyArray<C extends ContainerLike, O = never>
  extends Container<C> {
  toReadonlyArray<T>(
    options?: O,
  ): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
}

/**
 * @category TypeClass
 */
export interface ToSequence<C extends ContainerLike, O = never>
  extends Container<C> {
  toSequence<T>(options?: O): Function1<ContainerOf<C, T>, SequenceLike<T>>;
}

/**
 * @category TypeClass
 */
export interface Zip<C extends ContainerLike> extends Container<C> {
  zip<TA, TB>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
  ): ContainerOf<C, readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOf<C, readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
