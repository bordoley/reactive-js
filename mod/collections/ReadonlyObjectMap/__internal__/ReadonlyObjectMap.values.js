/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_map from "../../Enumerable/__internal__/Enumerable.map.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
const ReadonlyObjectMap_values = () => (obj) => pipe(obj, ReadonlyObjectMap_keys(), Enumerable_map(key => obj[key]));
export default ReadonlyObjectMap_values;
