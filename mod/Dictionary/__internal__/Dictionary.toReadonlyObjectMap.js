/// <reference types="./Dictionary.toReadonlyObjectMap.d.ts" />

import ReadonlyObjectMap_fromEntries from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import { compose } from "../../functions.js";
import Dictionary_entries from "./Dictionary.entries.js";
const Dictionary_toReadonlyObjectMap = (() => compose(Dictionary_entries(), ReadonlyObjectMap_fromEntries()));
export default Dictionary_toReadonlyObjectMap;
