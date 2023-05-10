import { newInstance } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_fromEntries: ReadonlyMap.Signature["fromEntries"] =
  <T, TKey extends ReadonlyMap.TKeyBase>() =>
  (entries: EnumeratorLike<readonly [TKey, T]>) => {
    const map = newInstance(Map<TKey, T>);

    while (entries[EnumeratorLike_move]()) {
      const [key, value] = entries[EnumeratorLike_current];
      map.set(key, value);
    }

    return map;
  };

export default ReadonlyMap_fromEntries;
