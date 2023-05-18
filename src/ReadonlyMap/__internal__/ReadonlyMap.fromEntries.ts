import { newInstance } from "../../functions.js";
import {
  EnumeratorFactoryLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_fromEntries: ReadonlyMap.Signature["fromEntries"] =
  <T, TKey extends ReadonlyMap.TKeyBase>() =>
  (factory: EnumeratorFactoryLike<readonly [TKey, T]>) => {
    const entries = factory();
    const map = newInstance(Map<TKey, T>);

    while (entries[EnumeratorLike_move]()) {
      const [key, value] = entries[EnumeratorLike_current];
      map.set(key, value);
    }

    return map;
  };

export default ReadonlyMap_fromEntries;
