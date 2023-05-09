/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../functions.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
const ReadonlyObjectMap_values = () => (obj) => pipe(obj, ReadonlyObjectMap_keys(), Enumerator_map(key => obj[key]));
export default ReadonlyObjectMap_values;
