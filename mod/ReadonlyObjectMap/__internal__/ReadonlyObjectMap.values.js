/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { pipe } from "../../functions.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
const ReadonlyObjectMap_values = () => (obj) => pipe(obj, ReadonlyObjectMap_keys(), Observable_map(key => obj[key]));
export default ReadonlyObjectMap_values;
