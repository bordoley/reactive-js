import EnumeratorFactory_map from "../../EnumeratorFactory/__internal__/EnumeratorFactory.map.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { pipe } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: ReadonlyObjectMap.Signature["values"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>) =>
    pipe(
      obj,
      ReadonlyObjectMap_keys(),
      EnumeratorFactory_map(key => obj[key as TKey] as T),
    );

export default ReadonlyObjectMap_values;
