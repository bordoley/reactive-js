import { DictionaryLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import Dictionary_toReadonlyMap from "./Dictionary.toReadonlyMap.js";

const Dictionary_union: Dictionary.Signature["union"] =
  <TKey extends string | symbol, T>(d2: DictionaryLike<TKey, T>) =>
  (d1: DictionaryLike<TKey, T>) => {
    const m1 = pipe(d1, Dictionary_toReadonlyMap());
    const m2 = pipe(d2, Dictionary_toReadonlyMap());
    return pipe(m1, ReadonlyMap.union(m2), ReadonlyMap.toDictionary());
  };

export default Dictionary_union;
