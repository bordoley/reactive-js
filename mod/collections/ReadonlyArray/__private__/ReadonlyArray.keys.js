/// <reference types="./ReadonlyArray.keys.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { sequence } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
const ReadonlyArray_keys = 
/*@__PURE__*/ returns((arr) => pipe(sequence(Enumerable.generate)(0), Enumerable.takeFirst({ count: arr[Array_length] })));
export default ReadonlyArray_keys;
