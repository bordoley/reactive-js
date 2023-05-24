/// <reference types="./ReadonlyMap.keys.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyMap_keys = () => map => Enumerable_create(() => pipe(map.keys(), Iterator_enumerate()), true);
export default ReadonlyMap_keys;
