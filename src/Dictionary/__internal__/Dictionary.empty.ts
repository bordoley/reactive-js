import type * as Dictionary from "../../Dictionary.js";
import ReadonlyMap_empty from "../../ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_toDictionary from "../../ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import { pipe } from "../../functions.js";
import { DictionaryLike } from "../../types.js";

const empty = /*@__PURE__*/ (() =>
  pipe(ReadonlyMap_empty(), ReadonlyMap_toDictionary()))();

const Dictionary_empty: Dictionary.Signature["empty"] = <T, TKey>() =>
  empty as DictionaryLike<TKey, T>;

export default Dictionary_empty;
