import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyMapContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyMap_mapWithKey: MapWithKey<ReadonlyMapContainerLike>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyOf<ReadonlyMapContainerLike> = KeyOf<ReadonlyMapContainerLike>,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (
      map: ReadonlyMapContainerLike<TA, TKey>,
    ): ReadonlyMapContainerLike<TB, TKey> => {
      const result = new Map<TKey, TB>();

      for (let [key, value] of map) {
        result.set(key, selector(value, key));
      }

      return result;
    };

export default ReadonlyMap_mapWithKey;
