import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike, ReadonlyObjectMapLike } from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: ReadonlyObjectMap.Signature["values"] =
  <T, TKey extends ReadonlyObjectMap.TKey = ReadonlyObjectMap.TKey>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>): EnumeratorLike<T> =>
    pipe(
      obj,
      ReadonlyObjectMap_keys(),
      Enumerator_map(key => obj[key as TKey] as T),
    );

export default ReadonlyObjectMap_values;
