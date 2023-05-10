/// <reference types="./ReadonlyArray.mapTo.d.ts" />

import { returns } from "../../functions.js";
import ReadonlyArray_map from "./ReadonlyArray.map.js";
const ReadonlyArray_mapTo = (v) => ReadonlyArray_map(returns(v));
export default ReadonlyArray_mapTo;
