import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { returns } from "../../functions.js";
import ReadonlyMap_map from "./ReadonlyMap.map.js";

const ReadonlyMap_mapTo: ReadonlyMap.Signature["mapTo"] = <T>(v: T) =>
  ReadonlyMap_map(returns(v));

export default ReadonlyMap_mapTo;
