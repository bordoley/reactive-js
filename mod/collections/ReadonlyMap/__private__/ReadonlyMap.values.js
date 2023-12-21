/// <reference types="./ReadonlyMap.values.d.ts" />

import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyMap_values = () => map => pipe(bind(map.values, map), Enumerable_fromIteratorFactory());
export default ReadonlyMap_values;
