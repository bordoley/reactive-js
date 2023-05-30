import { Tuple2, newInstance } from "../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_fromEntries: ReadonlyMap.Signature["fromEntries"] =
  <T, TKey extends ReadonlyMap.TKeyBase>() =>
  (enumerable: EnumerableLike<Tuple2<TKey, T>>) => {
    const entries = enumerable[EnumerableLike_enumerate]();
    const map = newInstance(Map<TKey, T>);

    while (entries[EnumeratorLike_move]()) {
      const [key, value] = entries[EnumeratorLike_current];
      map.set(key, value);
    }

    return map;
  };

export default ReadonlyMap_fromEntries;
