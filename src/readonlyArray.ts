import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  TypePredicate,
} from "./functions";

export const empty: ReadonlyArray<any> = [];

export type ReadonlyArrayOperator<TA, TB> = Function1<
  readonly TA[],
  readonly TB[]
>;

export const everySatisfy =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

const _fromObject = <T>(
  object: Readonly<Record<string, T>>,
): readonly [string, T][] => Object.entries<T>(object);
export const fromObject = <T>(): Function1<
  Readonly<Record<string, T>>,
  readonly [string, T][]
> => _fromObject;

export const join =
  (separator?: string): Function1<readonly string[], string> =>
  arr =>
    arr.join(separator);

export const keep =
  <T>(predicate: Predicate<T>): ReadonlyArrayOperator<T, T> =>
  arr =>
    arr.filter(predicate);

export const keepType =
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ReadonlyArrayOperator<TA, TB> =>
  arr =>
    arr.filter(predicate);

export const length = (arr: readonly unknown[]): number => arr.length;

export const map =
  <TA, TB>(mapper: Function1<TA, TB>): ReadonlyArrayOperator<TA, TB> =>
  arr =>
    arr.map(mapper);

export const reduce =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<readonly T[], TAcc> =>
  arr =>
    arr.reduce(reducer, initialValue());

export const reduceRight =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<readonly T[], TAcc> =>
  arr =>
    arr.reduceRight(reducer, initialValue());
