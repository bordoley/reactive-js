/// <reference types="./Dictionary.fromEntries.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyMap_fromEntries from "../../ReadonlyMap/__private__/ReadonlyMap.fromEntries.js";
import ReadonlyMap_toDictionary from "../../ReadonlyMap/__private__/ReadonlyMap.toDictionary.js";
const Dictionary_fromEntries = () => compose(ReadonlyMap_fromEntries(), ReadonlyMap_toDictionary());
export default Dictionary_fromEntries;
