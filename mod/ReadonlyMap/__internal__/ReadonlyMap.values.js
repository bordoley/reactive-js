/// <reference types="./ReadonlyMap.values.d.ts" />

import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyMap_values = () => map => pipe(map.values(), Iterator_enumerate());
export default ReadonlyMap_values;
