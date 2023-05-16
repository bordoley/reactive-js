/// <reference types="./ReadonlyObjectMap.fromReadonlyMap.d.ts" />

import ReadonlyMap_entries from "../../ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import { compose } from "../../functions.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap.fromEntries.js";
const ReadonlyObjectMap_fromReadonlyMap = () => compose(ReadonlyMap_entries(), ReadonlyObjectMap_fromEntries());
export default ReadonlyObjectMap_fromReadonlyMap;
