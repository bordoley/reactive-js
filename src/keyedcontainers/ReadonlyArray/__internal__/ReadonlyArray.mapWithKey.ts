import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyArrayLike,
} from "../../../keyedcontainers.js";

const ReadonlyArray_mapWithKey: MapWithKey<ReadonlyArrayLike>["mapWithKey"] =
  <TA, TB, TKey extends KeyOf<ReadonlyArrayLike> = KeyOf<ReadonlyArrayLike>>(
    mapper: Function2<TA, TKey, TB>,
  ) =>
  (arr: readonly TA[]): readonly TB[] =>
    arr.map(mapper as Function2<TA, number, TB>);

export default ReadonlyArray_mapWithKey;
