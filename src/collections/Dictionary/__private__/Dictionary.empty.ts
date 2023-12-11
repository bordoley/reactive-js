import { DictionaryLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";

const empty = /*@__PURE__*/ (() =>
  pipe(ReadonlyMap.empty(), ReadonlyMap.toDictionary()))();

const Dictionary_empty: Dictionary.Signature["empty"] = <T, TKey>() =>
  empty as DictionaryLike<TKey, T>;

export default Dictionary_empty;
