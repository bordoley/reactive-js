import { Function1, Predicate, SideEffect1 } from "../util/functions";
import { ContainerLike, Keep, Map } from "./ContainerLike";

export interface ReadonlyArrayLike<T = unknown>
  extends ContainerLike<T>,
    ReadonlyArray<T> {
  readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}

const _empty: ReadonlyArrayLike<any> = [];
export const empty = <T>(): ReadonlyArrayLike<T> => _empty;

export const every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export const keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: ReadonlyArrayLike<T>) => {
    const result: ReadonlyArray<T> = arr.filter(
      predicate as (value: T) => value is T,
    );
    return result;
  };

export const keepT: Keep<ReadonlyArrayLike> = { keep };

export const map: Map<ReadonlyArrayLike>["map"] =
  <TA, TB>(mapper: Function1<TA, TB>) =>
  (arr: ReadonlyArrayLike<TA>) =>
    arr.map(mapper);

export const mapT: Map<ReadonlyArrayLike> = { map };

export const forEach =
  <T>(
    f: SideEffect1<T>,
  ): Function1<ReadonlyArrayLike<T>, ReadonlyArrayLike<T>> =>
  arr => {
    arr.forEach(f);
    return arr;
  };
