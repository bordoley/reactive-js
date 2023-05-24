/// <reference types="./ReadonlyMap.entries.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyMap_entries = () => map => Enumerable_create(() => pipe(map.entries(), Iterator_enumerate()), true);
export default ReadonlyMap_entries;
