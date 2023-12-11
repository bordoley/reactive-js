/// <reference types="./Dictionary.empty.d.ts" />

import { pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const empty = /*@__PURE__*/ (() => pipe(ReadonlyMap.empty(), ReadonlyMap.toDictionary()))();
const Dictionary_empty = () => empty;
export default Dictionary_empty;
