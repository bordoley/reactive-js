/// <reference types="./ReadonlyMap.keys.d.ts" />

import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyMap_keys = () => map => pipe(bind(map.keys, map), Enumerable_fromIteratorFactory());
export default ReadonlyMap_keys;
