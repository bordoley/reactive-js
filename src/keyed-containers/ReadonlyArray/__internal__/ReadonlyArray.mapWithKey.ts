import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_mapWithKey: MapWithKey<ReadonlyArrayContainerLike>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyOf<ReadonlyArrayContainerLike> = KeyOf<ReadonlyArrayContainerLike>,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (arr: readonly TA[]): readonly TB[] =>
      arr.map(selector as Function2<TA, number, TB>);

export default ReadonlyArray_mapWithKey;
