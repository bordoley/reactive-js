import type * as Dictionary from "./../../Dictionary.js";
import Dictionary_forEachWithKey from "./Dictionary.forEachWithKey.js";

const Dictionary_forEach: Dictionary.Signature["forEach"] =
  Dictionary_forEachWithKey;

export default Dictionary_forEach;
