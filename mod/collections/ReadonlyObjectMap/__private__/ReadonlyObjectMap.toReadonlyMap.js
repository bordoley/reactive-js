/// <reference types="./ReadonlyObjectMap.toReadonlyMap.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";
const ReadonlyObjectMap_toReadonlyMap = 
/*@__PURE__*/ returns((obj) => pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap.fromEntries()));
export default ReadonlyObjectMap_toReadonlyMap;
