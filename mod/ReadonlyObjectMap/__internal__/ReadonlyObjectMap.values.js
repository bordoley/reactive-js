/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import EnumeratorFactory_map from "../../EnumeratorFactory/__internal__/EnumeratorFactory.map.js";
import { pipe } from "../../functions.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
const ReadonlyObjectMap_values = () => (obj) => pipe(obj, ReadonlyObjectMap_keys(), EnumeratorFactory_map(key => obj[key]));
export default ReadonlyObjectMap_values;
