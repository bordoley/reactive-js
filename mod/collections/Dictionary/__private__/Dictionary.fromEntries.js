/// <reference types="./Dictionary.fromEntries.d.ts" />

import { compose } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const Dictionary_fromEntries = () => compose(ReadonlyMap.fromEntries(), ReadonlyMap.toDictionary());
export default Dictionary_fromEntries;
