import { returns } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_map from "./ReadonlyArray.map.js";

const ReadonlyArray_mapTo: ReadonlyArray.Signature["mapTo"] = <T>(v: T) =>
  ReadonlyArray_map(returns(v));

export default ReadonlyArray_mapTo;
