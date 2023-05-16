import type * as Dictionary from "../../Dictionary.js";
import Dictionary_reduceWithKey from "./Dictionary.reduceWithKey.js";

const Dictionary_reduce: Dictionary.Signature["reduce"] =
  Dictionary_reduceWithKey;
export default Dictionary_reduce;
