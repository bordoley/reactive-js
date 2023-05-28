import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { returns } from "../../functions.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap.map.js";

const ReadonlyObjectMap_mapTo: ReadonlyObjectMap.Signature["mapTo"] = <T>(
  v: T,
) => ReadonlyObjectMap_map(returns(v));

export default ReadonlyObjectMap_mapTo;
