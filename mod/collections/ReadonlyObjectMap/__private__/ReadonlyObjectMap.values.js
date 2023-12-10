/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import { pipe } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
const ReadonlyObjectMap_values = () => (obj) => pipe(obj, ReadonlyObjectMap_keys(), Enumerable.map(key => obj[key]));
export default ReadonlyObjectMap_values;
