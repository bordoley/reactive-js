/// <reference types="./Dictionary.toReadonlyMap.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import Dictionary_entries from "./Dictionary.entries.js";
const Dictionary_toReadonlyMap = 
/*@__PURE__*/ returns((dict) => pipe(dict, Dictionary_entries(), ReadonlyMap.fromEntries()));
export default Dictionary_toReadonlyMap;
