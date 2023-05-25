/// <reference types="./ReadonlyArray.pick.d.ts" />

import { pickUnsafe } from "../../functions.js";
import ReadonlyArray_map from "./ReadonlyArray.map.js";
const ReadonlyArray_pick = (...keys) => ReadonlyArray_map(pickUnsafe(...keys));
export default ReadonlyArray_pick;
