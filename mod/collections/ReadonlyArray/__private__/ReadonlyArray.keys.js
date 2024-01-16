/// <reference types="./ReadonlyArray.keys.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { returns } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
const ReadonlyArray_keys = 
/*@__PURE__*/ returns((arr) => Enumerable.range(0, { count: arr[Array_length] }));
export default ReadonlyArray_keys;
