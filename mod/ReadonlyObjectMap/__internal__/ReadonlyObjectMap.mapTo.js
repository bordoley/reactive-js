/// <reference types="./ReadonlyObjectMap.mapTo.d.ts" />

import { returns } from "../../functions.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap.map.js";
const ReadonlyObjectMap_mapTo = (v) => ReadonlyObjectMap_map(returns(v));
export default ReadonlyObjectMap_mapTo;
