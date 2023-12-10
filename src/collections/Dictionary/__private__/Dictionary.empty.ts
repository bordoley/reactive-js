import { DictionaryLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import ReadonlyMap_empty from "../../ReadonlyMap/__private__/ReadonlyMap.empty.js";
import ReadonlyMap_toDictionary from "../../ReadonlyMap/__private__/ReadonlyMap.toDictionary.js";

const empty = /*@__PURE__*/ (() =>
  pipe(ReadonlyMap_empty(), ReadonlyMap_toDictionary()))();

const Dictionary_empty: Dictionary.Signature["empty"] = <T, TKey>() =>
  empty as DictionaryLike<TKey, T>;

export default Dictionary_empty;
