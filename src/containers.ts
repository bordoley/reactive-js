import {
  Equality,
  Factory,
  Function1,
  Option,
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

export interface ContainerLike {
  readonly [ContainerLike_T]?: unknown;
  readonly [ContainerLike_type]?: unknown;
}

export interface AsyncIterableLike<T = unknown>
  extends ContainerLike,
    AsyncIterable<T> {
  readonly [ContainerLike_type]?: AsyncIterableLike<
    this[typeof ContainerLike_T]
  >;
}

export interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
  readonly [ContainerLike_type]?: IterableLike<this[typeof ContainerLike_T]>;
}

export interface PromiseableLike<T = unknown>
  extends ContainerLike,
    PromiseLike<T> {
  readonly [ContainerLike_type]?: PromiseableLike<this[typeof ContainerLike_T]>;
}

export interface ReadonlyArrayLike<T = unknown>
  extends ContainerLike,
    ReadonlyArray<T> {
  readonly [ContainerLike_type]?: ReadonlyArrayLike<
    this[typeof ContainerLike_T]
  >;
}

export interface ReadonlySetLike<T = unknown>
  extends ContainerLike,
    ReadonlySet<T> {
  readonly [ContainerLike_type]?: ReadonlySetLike<this[typeof ContainerLike_T]>;
}

export interface SequenceLike<T = unknown> extends ContainerLike {
  readonly [ContainerLike_type]?: SequenceLike<this[typeof ContainerLike_T]>;

  (): Option<{
    readonly data: T;
    readonly next: SequenceLike<T>;
  }>;
}

/**  @ignore */
export const StatefulContainerLike_state = Symbol(
  "StatefulContainerLike_state",
);

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

export type ContainerOperator<C, TA, TB> = Function1<
  ContainerOf<C, TA>,
  ContainerOf<C, TB>
>;

export type Container<C extends ContainerLike> = {
  readonly ContainerLike_type?: C;
};

export type Buffer<C extends ContainerLike> = Container<C> & {
  buffer: <T>(options?: {
    readonly maxBufferSize?: number;
  }) => ContainerOperator<C, T, readonly T[]>;
};

export type CatchError<C extends ContainerLike> = Container<C> & {
  catchError<T>(
    onError: Function1<unknown, ContainerOf<C, T> | void>,
  ): ContainerOperator<C, T, T>;
};

export type Concat<C extends ContainerLike> = Container<C> & {
  concat<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;
};

export type ConcatAll<C extends ContainerLike, O = never> = Container<C> & {
  concatAll: <T>(
    options?: Partial<O>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>;
};

export type DecodeWithCharset<C extends ContainerLike> = Container<C> & {
  decodeWithCharset(
    charset?: string,
  ): ContainerOperator<C, ArrayBuffer, string>;
};

export type Defer<C extends ContainerLike, O = never> = Container<C> & {
  defer<T>(
    factory: Factory<ContainerOf<C, T>>,
    options?: Partial<O>,
  ): ContainerOf<C, T>;
};

export type DistinctUntilChanged<C extends ContainerLike> = Container<C> & {
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;
};

export type EverySatisfy<C extends ContainerLike> = Container<C> & {
  everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
};

export type Empty<C extends ContainerLike, O = never> = Container<C> & {
  empty<T>(options?: Partial<O>): ContainerOf<C, T>;
};

export type ForEach<C extends ContainerLike> = Container<C> & {
  forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
};

export type ForkConcat<C extends ContainerLike> = Container<C> & {
  forkConcat<TIn, TOut>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
};

export type ForkZip<C extends ContainerLike> = Container<C> & {
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
};

export type FromArrayOptions = {
  readonly start: Option<number>;
  readonly count: Option<number>;
};

export type FromArray<
  C extends ContainerLike,
  O extends FromArrayOptions = FromArrayOptions,
> = Container<C> & {
  fromArray<T>(
    options?: Partial<O>,
  ): Function1<readonly T[], ContainerOf<C, T>>;
};

export type FromAsyncIterable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  fromAsyncIterable<T>(
    options?: Partial<O>,
  ): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
};

export type FromIterable<C extends ContainerLike, O = never> = Container<C> & {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<Iterable<T>, ContainerOf<C, T>>;
};

export type FromPromise<C extends ContainerLike, O = never> = Container<C> & {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<PromiseLike<T>, ContainerOf<C, T>>;
};

export type FromSequence<C extends ContainerLike, O = never> = Container<C> & {
  fromSequence<T>(
    options?: Partial<O>,
  ): Function1<SequenceLike<T>, ContainerOf<C, T>>;
};

export type FromSet<
  C extends ContainerLike,
  O extends FromArrayOptions = FromArrayOptions,
> = Container<C> & {
  fromSet<T>(
    options?: Partial<O>,
  ): Function1<ReadonlySet<T>, ContainerOf<C, T>>;
};

export type Generate<C extends ContainerLike, O = never> = Container<C> & {
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: Partial<O>,
  ): ContainerOf<C, T>;
};

export type Keep<C extends ContainerLike> = Container<C> & {
  keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
};

export type Map<C extends ContainerLike> = Container<C> & {
  map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
};

export type Never<C extends StatefulContainerLike> = Container<C> & {
  never<T>(): ContainerOf<C, T>;
};

export type Pairwise<C extends ContainerLike> = Container<C> & {
  pairwise<T>(): ContainerOperator<C, T, readonly [T, T]>;
};

export type Reduce<C extends ContainerLike> = Container<C> & {
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
};

export type Repeat<C extends ContainerLike> = Container<C> & {
  repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
  repeat<T>(count: number): ContainerOperator<C, T, T>;
  repeat<T>(): ContainerOperator<C, T, T>;
};

export type Scan<C extends ContainerLike> = Container<C> & {
  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
};

export type SkipFirst<C extends ContainerLike> = Container<C> & {
  skipFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
};

export type SomeSatisfy<C extends ContainerLike> = Container<C> & {
  someSatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
};

export type TakeFirst<C extends ContainerLike> = Container<C> & {
  takeFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
};

export type TakeLast<C extends ContainerLike> = Container<C> & {
  takeLast<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
};

export type TakeWhile<C extends ContainerLike> = Container<C> & {
  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): ContainerOperator<C, T, T>;
};

export type ThrowIfEmpty<C extends ContainerLike> = Container<C> & {
  throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
};

export type ToAsyncIterable<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  toAsyncIterable<T>(
    options?: Partial<O>,
  ): Function1<ContainerOf<C, T>, AsyncIterableLike<T>>;
};

export type ToIterable<C extends ContainerLike, O = never> = Container<C> & {
  toIterable<T>(
    options?: Partial<O>,
  ): Function1<ContainerOf<C, T>, IterableLike<T>>;
};

export type ToPromiseable<
  C extends ContainerLike,
  Ctx = void,
> = Container<C> & {
  toPromise<T>(ctx: Ctx): Function1<ContainerOf<C, T>, PromiseableLike<T>>;
};

export type ToReadonlyArray<
  C extends ContainerLike,
  O = never,
> = Container<C> & {
  toReadonlyArray<T>(
    options?: Partial<O>,
  ): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};

export type ToSequence<C extends ContainerLike, O = never> = Container<C> & {
  toSequence<T>(
    options?: Partial<O>,
  ): Function1<ContainerOf<C, T>, SequenceLike<T>>;
};

export type ToReadonlySet<C extends ContainerLike, O = never> = Container<C> & {
  toReadonlySet<T>(
    options?: Partial<O>,
  ): Function1<ContainerOf<C, T>, ReadonlySetLike<T>>;
};

export type Zip<C extends ContainerLike> = Container<C> & {
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
};
