/// <reference types="./Dictionary.mapTo.d.ts" />

import { returns } from "../../functions.js";
import Dictionary_map from "./Dictionary.map.js";
const Dictionary_mapTo = (v) => Dictionary_map(returns(v));
export default Dictionary_mapTo;
