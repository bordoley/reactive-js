import {
  Concat,
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Empty,
  EverySatisfy,
  FromArray,
  FromArrayOptions,
  FromValue,
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
  pipe,
  returns,
} from "../functions";

export const compute = <C extends ContainerLike, T, TOptions>(
  m: Map<C> & FromValue<C, TOptions>,
  options?: TOptions,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(m.fromValue(options), m.map(callWith()));

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

export function endWith<
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, O>,
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
  <C extends ContainerLike, T, TOptions>(
    { empty, fromValue }: FromValue<C, TOptions> & Empty<C, TOptions>,
    options?: TOptions,
  ): Function1<Option<T>, ContainerOf<C, T>> =>
  option =>
    isSome(option) ? pipe(option, fromValue(options)) : empty(options);

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
  <C extends ContainerLike, T, TOptions>(
    m: Map<C> & FromValue<C, TOptions>,
    options?: TOptions,
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
