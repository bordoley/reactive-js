import { DictionaryLike } from "../../../collections.js";
import { pipe, returns } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";

const empty = /*@__PURE__*/ (() =>
  pipe(ReadonlyMap.empty(), ReadonlyMap.toDictionary()))();

const Dictionary_empty: Dictionary.Signature["empty"] = /*@__PURE__*/ returns(
  empty as DictionaryLike,
) as Dictionary.Signature["empty"];

export default Dictionary_empty;
