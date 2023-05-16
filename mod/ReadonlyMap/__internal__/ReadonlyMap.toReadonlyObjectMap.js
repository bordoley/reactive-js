/// <reference types="./ReadonlyMap.toReadonlyObjectMap.d.ts" />

import ReadonlyObjectMap_fromEntries from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import { compose } from "../../functions.js";
import ReadonlyMap_entries from "./ReadonlyMap.entries.js";
const ReadonlyMap_toReadonlyObjectMap = (() => compose(ReadonlyMap_entries(), ReadonlyObjectMap_fromEntries()));
export default ReadonlyMap_toReadonlyObjectMap;
