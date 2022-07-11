import { Function1, Predicate, SideEffect1, TypePredicate } from "./functions";

export const empty: ReadonlyArray<any> = [];

export type ReadonlyArrayOperator<TA, TB> = Function1<
  readonly TA[],
  readonly TB[]
>;

export const everySatisfy =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

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

export const map =
  <TA, TB>(mapper: Function1<TA, TB>): ReadonlyArrayOperator<TA, TB> =>
  arr =>
    arr.map(mapper);

export const forEach =
  <T>(f: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(f);
    return arr;
  };
