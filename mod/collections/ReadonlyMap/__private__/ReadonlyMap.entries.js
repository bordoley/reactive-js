/// <reference types="./ReadonlyMap.entries.d.ts" />

import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyMap_entries = () => map => pipe(bind(map.entries, map), Enumerable_fromIteratorFactory());
export default ReadonlyMap_entries;
