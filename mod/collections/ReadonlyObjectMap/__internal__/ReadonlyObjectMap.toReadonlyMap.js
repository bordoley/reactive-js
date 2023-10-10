/// <reference types="./ReadonlyObjectMap.toReadonlyMap.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyMap_fromEntries from "../../ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";
const ReadonlyObjectMap_toReadonlyMap = () => (obj) => pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap_fromEntries());
export default ReadonlyObjectMap_toReadonlyMap;
