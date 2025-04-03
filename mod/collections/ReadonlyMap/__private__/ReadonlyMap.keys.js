/// <reference types="./ReadonlyMap.keys.d.ts" />

import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { bind, returns } from "../../../functions.js";
const ReadonlyMap_keys = /*@__PURE__*/ returns(map => Iterable_createPure(bind(map.keys, map)));
export default ReadonlyMap_keys;
