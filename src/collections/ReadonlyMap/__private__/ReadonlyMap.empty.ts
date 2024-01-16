import { newInstance, returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_empty: ReadonlyMap.Signature["empty"] = /*@__PURE__*/ (() =>
  returns(newInstance(Map)))() as ReadonlyMap.Signature["empty"];

export default ReadonlyMap_empty;
