import { Option, isSome } from "../util/Option";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  TypePredicate,
  Updater,
  alwaysFalse,
  callWith,
  compose,
  isEqualTo,
  negate,
  pipe,
  returns,
} from "../util/functions";
import { empty as emptyArray } from "./ReadonlyArrayLike";

export interface ContainerLike {
  readonly T?: unknown;
  readonly TContainerOf?: unknown;
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

export type DistinctUntilChanged<C extends ContainerLike> = Container<C> & {
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;
};

export type EverySatisfy<C extends ContainerLike> = Container<C> & {
  everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
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

export type ToArray<C extends ContainerLike> = Container<C> & {
  toArray<T>(): Function1<ContainerOf<C, T>, readonly T[]>;
};

export type ToIterable<C extends ContainerLike> = Container<C> & {
  toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
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

export const compute = <
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Map<C> & FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(fromValue(m, options), m.map(callWith()));

export const concatMap = <
  C extends ContainerLike,
  TA,
  TB,
  O = Record<string, never>,
>(
  { map, concatAll }: Map<C> & ConcatAll<C, O>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
  options?: Partial<O>,
): ContainerOperator<C, TA, TB> => compose(map(mapper), concatAll(options));

export const concatWith =
  <C extends ContainerLike, T>(
    { concat }: Concat<C>,
    snd: ContainerOf<C, T>,
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd);

export const contains = <C extends ContainerLike, T>(
  { someSatisfy }: SomeSatisfy<C>,
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): ContainerOperator<C, T, boolean> => someSatisfy(isEqualTo(value, options));

export const empty = <
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  { fromArray }: FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): ContainerOf<C, T> => fromArray<T>({ ...options })(emptyArray());

export function endWith<C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function endWith<C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, FromArrayOptions>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> {
  return concatWith(m, m.fromArray<T>()(values));
}

export const fromOption =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    m: FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Option<T>, ContainerOf<C, T>> =>
  option =>
    isSome(option)
      ? fromValue<C, T, O>(m, options)(option)
      : empty<C, T, O>(m, options);

export const fromValue =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    { fromArray }: FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<T, ContainerOf<C, T>> =>
  (value: T) =>
    pipe(
      [value],
      fromArray({
        ...options,
      }),
    );

export const keepType = <C extends ContainerLike, TA, TB extends TA>(
  { keep }: Keep<C>,
  predicate: TypePredicate<TA, TB>,
): ContainerOperator<C, TA, TB> =>
  keep(predicate) as ContainerOperator<C, TA, TB>;

export const ignoreElements = <C extends ContainerLike, T>({
  keep,
}: Keep<C>): ContainerOperator<C, unknown, T> =>
  keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export const mapTo = <C extends ContainerLike, TA, TB>(
  { map }: Map<C>,
  value: TB,
): ContainerOperator<C, TA, TB> => pipe(value, returns, map);

export const noneSatisfy = <C extends ContainerLike, T>(
  { everySatisfy }: EverySatisfy<C>,
  predicate: Predicate<T>,
): ContainerOperator<C, T, boolean> => everySatisfy(compose(predicate, negate));

export function startWith<C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function startWith<C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> {
  return container => pipe(values, m.fromArray(), concatWith(m, container));
}

export const throws =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    m: Map<C> & FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Factory<unknown>, ContainerOf<C, T>> =>
  (errorFactory): ContainerOf<C, T> =>
    pipe(() => {
      const cause = errorFactory();
      throw cause;
    }, compute(m, options));

export const zipWith =
  <C extends ContainerLike, TA, TB>(
    { zip }: Zip<C>,
    snd: ContainerOf<C, TB>,
  ): ContainerOperator<C, TA, readonly [TA, TB]> =>
  fst =>
    zip(fst, snd);
