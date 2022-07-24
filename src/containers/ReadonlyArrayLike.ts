import { Function1, Predicate, SideEffect1, identity } from "../util/functions";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Empty,
  Keep,
  Map,
} from "./ContainerLike";

export interface ReadonlyArrayLike<T = unknown>
  extends ContainerLike,
    ReadonlyArray<T> {
  readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}

export type ToReadonlyArray<C extends ContainerLike> = Container<C> & {
  toReadonlyArray<T>(): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};

export const empty = /*@__PURE__*/ (() => {
  const _empty: readonly any[] = [];
  return <T>(): readonly T[] => _empty;
})();

export const emptyT: Empty<ReadonlyArrayLike> = { empty };

export const every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export const keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: readonly T[]): readonly T[] => {
    const result: ReadonlyArray<T> = arr.filter(
      predicate as (value: T) => value is T,
    );
    return result;
  };
export const keepT: Keep<ReadonlyArrayLike> = { keep };

export const map: Map<ReadonlyArrayLike>["map"] =
  <TA, TB>(mapper: Function1<TA, TB>) =>
  (arr: readonly TA[]): readonly TB[] =>
    arr.map(mapper);
export const mapT: Map<ReadonlyArrayLike> = { map };

export const forEach =
  <T>(f: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(f);
    return arr;
  };

export const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike>["toReadonlyArray"] =
  () => identity;
export const toReadonlyArrayT: ToReadonlyArray<ReadonlyArrayLike> = {
  toReadonlyArray,
};
