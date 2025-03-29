/// <reference types="./Dictionary.empty.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const empty = /*@__PURE__*/ (() => pipe(ReadonlyMap.empty(), ReadonlyMap.toDictionary()))();
const Dictionary_empty = /*@__PURE__*/ returns(empty);
export default Dictionary_empty;
