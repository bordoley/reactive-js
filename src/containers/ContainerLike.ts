import {
  Concat,
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Defer,
  EverySatisfy,
  FromArray,
  FromArrayOptions,
  FromIterable,
  Keep,
  Map,
  SomeSatisfy,
  Zip,
} from "../containers";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  TypePredicate,
  alwaysFalse,
  callWith,
  compose,
  isEqualTo,
  isSome,
  negate,
  newInstance,
  pipe,
  returns,
} from "../functions";

export const compute = <
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Map<C> & FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(
    x => [x],
    m.fromArray<Factory<T>>({
      ...options,
    }),
    m.map(callWith()),
  );

export const concatMap = <C extends ContainerLike, TA, TB, O = never>(
  { map, concatAll }: Map<C> & ConcatAll<C, O>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
  options?: Partial<O>,
): ContainerOperator<C, TA, TB> => compose(map(mapper), concatAll(options));

export const concatWith =
  <C extends ContainerLike, T>(
    { concat }: Concat<C>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export const contains = <C extends ContainerLike, T>(
  { someSatisfy }: SomeSatisfy<C>,
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): ContainerOperator<C, T, boolean> => someSatisfy(isEqualTo(value, options));

export const encodeUtf8 =
  <C extends ContainerLike>(
    m: Defer<C> & Map<C>,
  ): ContainerOperator<C, string, Uint8Array> =>
  obs =>
    m.defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(
        obs,
        m.map(s => textEncoder.encode(s)),
      );
    });

export function endWith<
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function endWith<
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, O>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> {
  return concatWith(m, m.fromArray<T>()(values));
}

export const fromOption =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    { fromArray }: FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Option<T>, ContainerOf<C, T>> =>
  option =>
    pipe(isSome(option) ? [option] : [], fromArray<T>({ ...options }));

export const genMap = <
  C extends ContainerLike,
  TA,
  TB,
  OConcatAll = never,
  OFromIterable = never,
>(
  m: Map<C> & ConcatAll<C, OConcatAll> & FromIterable<C, OFromIterable>,
  mapper: Function1<TA, Generator<TB, any, any>>,
  options?: Partial<OConcatAll & OFromIterable>,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(x, mapper, m.fromIterable<TB>(options))),
    m.concatAll(options),
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

export function startWith<
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, O>,
  value: T,
  ...values: readonly T[]
): ContainerOperator<C, T, T>;
export function startWith<
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, O>,
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

interface ZipWith {
  <C extends ContainerLike, TA, TB>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
  ): ContainerOperator<C, TA, readonly [TA, TB]>;
  <C extends ContainerLike, TA, TB, TC>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC]>;
  <C extends ContainerLike, TA, TB, TC, TD>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
export const zipWith: ZipWith =
  <C extends ContainerLike>(
    { zip }: Zip<C>,
    snd: ContainerOf<C, any>,
    ...tail: readonly ContainerOf<C, any>[]
  ): ContainerOperator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);
