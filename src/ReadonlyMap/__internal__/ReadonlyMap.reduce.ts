import type * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyMap_reduceWithKey from "./ReadonlyMap.reduceWithKey.js";

const ReadonlyMap_reduce: ReadonlyMap.Signature["reduce"] =
  ReadonlyMap_reduceWithKey;

export default ReadonlyMap_reduce;
