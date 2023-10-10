import { returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_empty: ReadonlyMap.Signature["empty"] = /*@__PURE__*/ (() =>
  returns(new Map()))();

export default ReadonlyMap_empty;
