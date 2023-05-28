/// <reference types="./ReadonlyMap.mapTo.d.ts" />

import { returns } from "../../functions.js";
import ReadonlyMap_map from "./ReadonlyMap.map.js";
const ReadonlyMap_mapTo = (v) => ReadonlyMap_map(returns(v));
export default ReadonlyMap_mapTo;
