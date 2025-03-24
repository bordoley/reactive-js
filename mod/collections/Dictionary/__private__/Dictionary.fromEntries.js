/// <reference types="./Dictionary.fromEntries.d.ts" />

import { compose, returns } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const Dictionary_fromEntries = 
/*@__PURE__*/ (() => returns(compose(ReadonlyMap.fromEntries(), ReadonlyMap.toDictionary())))();
export default Dictionary_fromEntries;
