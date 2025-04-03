/// <reference types="./ReadonlyMap.entries.d.ts" />

import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { bind, returns } from "../../../functions.js";
const ReadonlyMap_entries = 
/*@__PURE__*/ returns(map => Iterable_createPure(bind(map.entries, map)));
export default ReadonlyMap_entries;
