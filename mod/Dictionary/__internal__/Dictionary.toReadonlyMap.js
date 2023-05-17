/// <reference types="./Dictionary.toReadonlyMap.d.ts" />

import ReadonlyMap_fromEntries from "../../ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import { pipe } from "../../functions.js";
import Dictionary_entries from "./Dictionary.entries.js";
const Dictionary_toReadonlyMap = () => (dict) => pipe(dict, Dictionary_entries(), ReadonlyMap_fromEntries());
export default Dictionary_toReadonlyMap;
