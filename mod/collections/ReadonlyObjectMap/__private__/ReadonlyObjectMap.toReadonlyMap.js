/// <reference types="./ReadonlyObjectMap.toReadonlyMap.d.ts" />

import { pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";
const ReadonlyObjectMap_toReadonlyMap = () => (obj) => pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap.fromEntries());
export default ReadonlyObjectMap_toReadonlyMap;
