import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_map from "../../Enumerable/__internal__/Enumerable.map.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: ReadonlyObjectMap.Signature["values"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>) =>
    pipe(
      obj,
      ReadonlyObjectMap_keys(),
      Enumerable_map(key => obj[key as TKey] as T),
    );

export default ReadonlyObjectMap_values;
