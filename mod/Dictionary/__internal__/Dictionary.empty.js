/// <reference types="./Dictionary.empty.d.ts" />

import ReadonlyMap_empty from "../../ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_toDictionary from "../../ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import { pipe } from "../../functions.js";
const empty = /*@__PURE__*/ (() => pipe(ReadonlyMap_empty(), ReadonlyMap_toDictionary()))();
const Dictionary_empty = () => empty;
export default Dictionary_empty;
