import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { returns } from "../../functions.js";

const ReadonlyMap_empty: ReadonlyMap.Signature["empty"] = /*@__PURE__*/ (() =>
  returns(new Map()))();

export default ReadonlyMap_empty;
