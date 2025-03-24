import { compose, returns } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";

const Dictionary_fromEntries: Dictionary.Signature["fromEntries"] =
  /*@__PURE__*/ (() =>
    returns(compose(ReadonlyMap.fromEntries(), ReadonlyMap.toDictionary())))();

export default Dictionary_fromEntries;
