import {
  AbstractDisposable,
  DisposableLike,
  createDisposableValue,
} from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Predicate,
  Reducer,
  TypePredicate,
  Updater,
  alwaysFalse,
  callWith,
  compose,
  ignore,
  isEqualTo,
  negate,
  pipe,
  pipeLazy,
  raise,
  returns,
  strictEquality,
} from "./functions";
import { Option, isSome } from "./option";
import { empty as emptyArray } from "./readonlyArray";

export interface ContainerLike {
  readonly T?: unknown;
  readonly type?: unknown;
}

export abstract class AbstractContainer implements ContainerLike {
  get type(): this {
    return raise();
  }
  get T(): unknown {
    return raise();
  }
}

export abstract class AbstractDisposableContainer
  extends AbstractDisposable
  implements ContainerLike
{
  get type(): this {
    return raise();
  }
  get T(): unknown {
    return raise();
  }
}

export type ContainerOf<C extends ContainerLike, T> = C extends {
  readonly type: unknown;
}
  ? (C & {
      readonly T: T;
    })["type"]
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type ContainerOperator<C, TA, TB> = Function1<
  ContainerOf<C, TA>,
  ContainerOf<C, TB>
>;

export interface Container<C extends ContainerLike> {
  readonly type?: C;
}

export interface Concat<C extends ContainerLike> extends Container<C> {
  concat<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;
}

export interface ConcatAll<C extends ContainerLike, O = Record<string, never>>
  extends Container<C> {
  concatAll: <T>(
    options?: Partial<O>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>;
}

export interface DecodeWithCharset<C extends ContainerLike>
  extends Container<C> {
  decodeWithCharset(
    charset?: string,
  ): ContainerOperator<C, ArrayBuffer, string>;
}

export interface DistinctUntilChanged<C extends ContainerLike>
  extends Container<C> {
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;
}

export interface EverySatisfy<C extends ContainerLike> extends Container<C> {
  everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
}

export interface FromArrayOptions {
  readonly startIndex: Option<number>;
  readonly endIndex: Option<number>;
}

export interface FromArray<
  C extends ContainerLike,
  O extends FromArrayOptions = FromArrayOptions,
> extends Container<C> {
  fromArray<T>(
    options?: Partial<O>,
  ): Function1<readonly T[], ContainerOf<C, T>>;
}

export interface Generate<C extends ContainerLike> extends Container<C> {
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): ContainerOf<C, T>;
}

export interface FromIterable<
  C extends ContainerLike,
  O extends Record<string, never> = Record<string, never>,
> extends Container<C> {
  fromIterable<T>(
    options?: Partial<O>,
  ): Function1<Iterable<T>, ContainerOf<C, T>>;
}

export interface FromIterator<
  C extends ContainerLike,
  O extends Record<string, unknown> = Record<string, never>,
> extends Container<C> {
  fromIterator<T, TReturn = any, TNext = unknown>(
    options?: Partial<O>,
  ): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
}

export interface Keep<C extends ContainerLike> extends Container<C> {
  keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
}

export interface Map<C extends ContainerLike> extends Container<C> {
  map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}

export interface Pairwise<C extends ContainerLike> extends Container<C> {
  pairwise<T>(): ContainerOperator<C, T, readonly [Option<T>, T]>;
}

export interface Reduce<C extends ContainerLike> extends Container<C> {
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}

export interface Repeat<C extends ContainerLike> extends Container<C> {
  repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
  repeat<T>(count: number): ContainerOperator<C, T, T>;
  repeat<T>(): ContainerOperator<C, T, T>;
}

export interface Scan<C extends ContainerLike> extends Container<C> {
  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}

export interface SkipFirst<C extends ContainerLike> extends Container<C> {
  skipFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

export interface SomeSatisfy<C extends ContainerLike> extends Container<C> {
  someSatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
}

export interface TakeFirst<C extends ContainerLike> extends Container<C> {
  takeFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

export interface TakeLast<C extends ContainerLike> extends Container<C> {
  takeLast<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

export interface TakeWhile<C extends ContainerLike> extends Container<C> {
  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): ContainerOperator<C, T, T>;
}

export interface ThrowIfEmpty<C extends ContainerLike> extends Container<C> {
  throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}

export interface Using<C extends ContainerLike> extends Container<C> {
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
}

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
  zip<T>(
    ...enumerables: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, readonly T[]>;
}

export const compute = <C, T, O extends FromArrayOptions = FromArrayOptions>(
  m: Map<C> & FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(fromValue(m, options), m.map(callWith()));

export const concatMap = <C, TA, TB, O = Record<string, never>>(
  { map, concatAll }: Map<C> & ConcatAll<C, O>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
  options?: Partial<O>,
): ContainerOperator<C, TA, TB> => compose(map(mapper), concatAll(options));

export const concatWith =
  <C, T>(
    { concat }: Concat<C>,
    snd: ContainerOf<C, T>,
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd);

export const empty = <C, T, O extends FromArrayOptions = FromArrayOptions>(
  { fromArray }: FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): ContainerOf<C, T> => fromArray<T>({ ...options })(emptyArray);

export const contains = <C, T>(
  { someSatisfy }: SomeSatisfy<C>,
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): ContainerOperator<C, T, boolean> => {
  const { equality = strictEquality } = options;
  return someSatisfy(isEqualTo(value, equality));
};

export const encodeUtf8 =
  <C>(m: Using<C> & Map<C>): ContainerOperator<C, string, Uint8Array> =>
  obs =>
    m.using(
      () => createDisposableValue(new TextEncoder(), ignore),
      v =>
        pipe(
          obs,
          m.map(s => v.value.encode(s)),
        ),
    );

export function endWith<C, T>(
  m: Concat<C> & FromArray<C>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function endWith<C, T>(
  m: Concat<C> & FromArray<C, FromArrayOptions>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> {
  return concatWith(m, m.fromArray<T>()(values));
}

export const fromOption =
  <C, T, O extends FromArrayOptions = FromArrayOptions>(
    m: FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Option<T>, ContainerOf<C, T>> =>
  option =>
    isSome(option)
      ? fromValue<C, T, O>(m, options)(option)
      : empty<C, T, O>(m, options);

export const fromValue =
  <C, T, O extends FromArrayOptions = FromArrayOptions>(
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

export const genMap = <
  C,
  TA,
  TB,
  OConcatAll extends Record<string, never> = Record<string, never>,
  OFromIterator extends Record<string, never> = Record<string, never>,
  TReturn = any,
  TNext = unknown,
>(
  m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>,
  mapper: Function1<TA, Generator<TB, TReturn, TNext>>,
  options?: Partial<OConcatAll & OFromIterator>,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator<TB>(options))),
    m.concatAll(options),
  );

export const keepType = <C, TA, TB extends TA>(
  { keep }: Keep<C>,
  predicate: TypePredicate<TA, TB>,
): ContainerOperator<C, TA, TB> =>
  keep(predicate) as ContainerOperator<C, TA, TB>;

export const ignoreElements = <C, T>({
  keep,
}: Keep<C>): ContainerOperator<C, unknown, T> =>
  keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export const mapTo = <C, TA, TB>(
  { map }: Map<C>,
  value: TB,
): ContainerOperator<C, TA, TB> => pipe(value, returns, map);

export const noneSatisfy = <C, T>(
  { everySatisfy }: EverySatisfy<C>,
  predicate: Predicate<T>,
): ContainerOperator<C, T, boolean> => everySatisfy(compose(predicate, negate));

export function startWith<C, T>(
  m: Concat<C> & FromArray<C>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function startWith<C, T>(
  m: Concat<C> & FromArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> {
  return container => pipe(values, m.fromArray(), concatWith(m, container));
}

export const throws =
  <C, T, O extends FromArrayOptions = FromArrayOptions>(
    m: Map<C> & FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Factory<unknown>, ContainerOf<C, T>> =>
  errorFactory =>
    pipe(() => {
      const cause = errorFactory();
      throw cause;
    }, compute(m, options)) as ContainerOf<C, T>;

export const zipWith =
  <C, TA, TB>(
    { zip }: Zip<C>,
    snd: ContainerOf<C, TB>,
  ): ContainerOperator<C, TA, readonly [TA, TB]> =>
  fst =>
    zip(fst, snd);
