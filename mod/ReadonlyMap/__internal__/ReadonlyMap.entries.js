/// <reference types="./ReadonlyMap.entries.d.ts" />

import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyMap_entries = () => map => pipe(map.entries(), Iterator_enumerate());
export default ReadonlyMap_entries;
