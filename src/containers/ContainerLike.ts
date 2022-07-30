import {
  Concat,
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Defer,
  Empty,
  EverySatisfy,
  FromArray,
  FromArrayOptions,
  FromIterator,
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
  newInstance,
  pipe,
  pipeLazy,
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

export const genMap = <
  C extends ContainerLike,
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
