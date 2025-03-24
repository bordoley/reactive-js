import { DictionaryLike_keys } from "../../../collections.js";
import { pick, returns } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";

const Dictionary_keys: Dictionary.Signature["keys"] = /*@__PURE__*/ returns(
  pick(DictionaryLike_keys),
) as Dictionary.Signature["keys"];

export default Dictionary_keys;
