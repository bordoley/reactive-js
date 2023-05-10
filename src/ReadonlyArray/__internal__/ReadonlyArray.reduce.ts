import type * as ReadonlyArray from "../../ReadonlyArray.js";
import ReadonlyArray_reduceWithKey from "./ReadonlyArray.reduceWithKey.js";

const ReadonlyArray_reduce: ReadonlyArray.Signature["reduce"] =
  ReadonlyArray_reduceWithKey;

export default ReadonlyArray_reduce;
