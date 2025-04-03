import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { returns, tuple } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_entries: Dictionary.Signature["entries"] =
  /*@__PURE__*/
  returns((dict: DictionaryLike) =>
    Iterable_createPure(function* () {
      for (const key of dict[DictionaryLike_keys]) {
        yield tuple(key, dict[DictionaryLike_get](key));
      }
    }),
  ) as Dictionary.Signature["entries"];

export default Dictionary_entries;
