import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: ReadonlyObjectMap.Signature["values"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, T>) =>
    pipe(
      obj,
      ReadonlyObjectMap_keys(),
      Enumerable.map(key => obj[key as TKey] as T),
    );

export default ReadonlyObjectMap_values;
