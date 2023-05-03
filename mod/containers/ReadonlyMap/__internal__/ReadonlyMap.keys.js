/// <reference types="./ReadonlyMap.keys.d.ts" />

import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
const ReadonlyMap_keys = () => map => pipe(map.keys(), Iterator_enumerate());
export default ReadonlyMap_keys;
