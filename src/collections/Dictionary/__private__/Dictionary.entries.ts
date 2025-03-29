import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { returns, tuple } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  /*@__PURE__*/
  returns((dict: DictionaryLike) => ({
    *[Symbol.iterator]() {
      for (const key of dict[DictionaryLike_keys]) {
        yield tuple(key, dict[DictionaryLike_get](key));
      }
    },
  })) as Dictionary.Signature["entries"];

export default Dictionary_entries;
