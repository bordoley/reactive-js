/// <reference types="./ReadonlyMap.values.d.ts" />

import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { bind, returns } from "../../../functions.js";
const ReadonlyMap_values = 
/*@__PURE__*/ returns(map => Iterable_createPure(bind(map.values, map)));
export default ReadonlyMap_values;
