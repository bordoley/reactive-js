/// <reference types="./Enumerable.empty.d.ts" />

import { pipeLazy } from "../../../functions.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_values from "../../ReadonlyArray/__private__/ReadonlyArray.values.js";
const Enumerable_empty = /*@__PURE__*/ (() => pipeLazy(ReadonlyArray_empty(), ReadonlyArray_values()))();
export default Enumerable_empty;
