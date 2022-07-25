import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Option,
  Predicate,
  Reducer,
  Updater,
} from "./functions";
import { DisposableLike } from "./util";

export interface ContainerLike {
  readonly T?: unknown;
  readonly TContainerOf?: unknown;
}

export interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
  readonly TContainerOf?: IterableLike<this["T"]>;
}

export interface ReadonlyArrayLike<T = unknown>
  extends ContainerLike,
    ReadonlyArray<T> {
  readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}

export interface SequenceLike<T = unknown> extends ContainerLike {
  readonly TContainerOf?: SequenceLike<this["T"]>;

  (): Option<{
    readonly data: T;
    readonly next: SequenceLike<T>;
  }>;
}

export interface StatefulContainerLike extends ContainerLike {
  readonly TStatefulContainerState?: DisposableLike;
}

export type ContainerOf<C extends ContainerLike, T> = C extends {
  readonly TContainerOf?: unknown;
}
  ? NonNullable<
      (C & {
        readonly T: T;
      })["TContainerOf"]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type StatefulContainerStateOf<
  C extends StatefulContainerLike,
  T,
> = C extends {
  readonly TStatefulContainerState?: DisposableLike;
}
  ? NonNullable<
      (C & {
        readonly T: T;
      })["TStatefulContainerState"]
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
  readonly TContainerOf?: C;
};

export type Buffer<C extends ContainerLike> = Container<C> & {
  buffer: <T>(options?: {
    readonly maxBufferSize?: number;
  }) => ContainerOperator<C, T, readonly T[]>;
};

export type CatchError<C extends StatefulContainerLike> = Container<C> & {
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

export type ConcatAll<
  C extends ContainerLike,
  O = Record<string, never>,
> = Container<C> & {
  concatAll: <T>(
    options?: Partial<O>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>;
};

export type DecodeWithCharset<C extends StatefulContainerLike> =
  Container<C> & {
    decodeWithCharset(
      charset?: string,
    ): ContainerOperator<C, ArrayBuffer, string>;
  };

export type Defer<C extends StatefulContainerLike> = Container<C> & {
  defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
};

export type DistinctUntilChanged<C extends ContainerLike> = Container<C> & {
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;
};

export type EverySatisfy<C extends ContainerLike> = Container<C> & {
  everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
};

export type Empty<C extends ContainerLike, TOptions = never> = Container<C> & {
  empty<T>(options?: TOptions): ContainerOf<C, T>;
};

export type FromArrayOptions = {
  readonly start: number;
  readonly count: number;
};

export type FromArray<
  C extends ContainerLike,
  O extends FromArrayOptions = FromArrayOptions,
> = Container<C> & {
  fromArray<T>(
    options?: Partial<O>,
  ): Function1<readonly T[], ContainerOf<C, T>>;
};

export type FromIterable<
  C extends StatefulContainerLike,
  O extends Record<string, never> = Record<string, never>,
> = Container<C> & {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<Iterable<T>, ContainerOf<C, T>>;
};

export type FromIterator<
  C extends StatefulContainerLike,
  O extends Record<string, unknown> = Record<string, never>,
> = Container<C> & {
  fromIterator<T, TReturn = any, TNext = unknown>(
    options?: Partial<O>,
  ): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
};

export type FromValue<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  fromValue<T>(options?: TOptions): Function1<T, ContainerOf<C, T>>;
};

export type Generate<C extends ContainerLike> = Container<C> & {
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): ContainerOf<C, T>;
};

export type Keep<C extends ContainerLike> = Container<C> & {
  keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
};

export type Map<C extends ContainerLike> = Container<C> & {
  map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
};

export type Pairwise<C extends ContainerLike> = Container<C> & {
  pairwise<T>(): ContainerOperator<C, T, readonly [Option<T>, T]>;
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

export type ThrowIfEmpty<C extends StatefulContainerLike> = Container<C> & {
  throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
};

export type ToIterable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toIterable<T>(options?: TOptions): Function1<ContainerOf<C, T>, Iterable<T>>;
};

export type ToReadonlyArray<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toReadonlyArray<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};

export type ToSequence<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toSequence<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, SequenceLike<T>>;
};

export type Using<C extends StatefulContainerLike> = Container<C> & {
  using<TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource>,
    containerFactory: Function1<TResource, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2]>,
    containerFactory: Function2<TResource1, TResource2, ContainerOf<C, T>>,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2, TResource3]>,
    containerFactory: Function3<
      TResource1,
      TResource2,
      TResource3,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
    TResource4 extends DisposableLike,
    T,
  >(
    resourceFactory: Factory<[TResource1, TResource2, TResource3, TResource4]>,
    containerFactory: Function4<
      TResource1,
      TResource2,
      TResource3,
      TResource4,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<
    TResource1 extends DisposableLike,
    TResource2 extends DisposableLike,
    TResource3 extends DisposableLike,
    TResource4 extends DisposableLike,
    TResource5 extends DisposableLike,
    T,
  >(
    resourceFactory: Factory<
      [TResource1, TResource2, TResource3, TResource4, TResource5]
    >,
    containerFactory: Function5<
      TResource1,
      TResource2,
      TResource3,
      TResource4,
      TResource5,
      ContainerOf<C, T>
    >,
  ): ContainerOf<C, T>;

  using<TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    runnableFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T>;
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
  zip<T>(
    ...enumerables: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, readonly T[]>;
};

export const emptyReadonlyArray = /*@__PURE__*/ (() => {
  const _empty: readonly any[] = [];
  return <T>(): ReadonlyArrayLike<T> => _empty;
})();

export const emptyReadonlyArrayT: Empty<ReadonlyArrayLike> = {
  empty: emptyReadonlyArray,
};

export const generateSequence: Generate<SequenceLike>["generate"] =
  /*@__PURE__*/ (() => {
    const _generate =
      <T>(generator: Updater<T>, data: T): SequenceLike<T> =>
      () => ({ data, next: _generate(generator, generator(data)) });

    return <T>(generator: Updater<T>, initialValue: Factory<T>) =>
      () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
      };
  })();

export const generateSequenceT: Generate<SequenceLike> = {
  generate: generateSequence,
};
