/// <reference types="./ReadonlyArray.keys.d.ts" />

import { returns } from "../../../functions.js";
import Enumerable_range from "../../Enumerable/__internal__/Enumerable.range.js";
const ReadonlyArray_keys = 
/*@__PURE__*/ returns((arr) => Enumerable_range(0, { count: arr.length }));
export default ReadonlyArray_keys;
