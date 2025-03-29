import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { returns } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_values: Dictionary.Signature["values"] = /*@__PURE__*/ returns(
  (dict: DictionaryLike) => ({
    *[Symbol.iterator]() {
      for (const key of dict[DictionaryLike_keys]) {
        yield dict[DictionaryLike_get](key);
      }
    },
  }),
) as Dictionary.Signature["values"];

export default Dictionary_values;
