/// <reference types="./ReadonlyObjectMap.toReadonlyMap.d.ts" />

import ReadonlyMap_fromEntries from "../../ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import { pipe } from "../../functions.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";
const ReadonlyObjectMap_toReadonlyMap = () => (obj) => pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap_fromEntries());
export default ReadonlyObjectMap_toReadonlyMap;
