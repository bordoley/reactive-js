import type * as Dictionary from "../../Dictionary.js";
import { returns } from "../../functions.js";
import Dictionary_map from "./Dictionary.map.js";

const Dictionary_mapTo: Dictionary.Signature["mapTo"] = <T>(v: T) =>
  Dictionary_map(returns(v));

export default Dictionary_mapTo;
