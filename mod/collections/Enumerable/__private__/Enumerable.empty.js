/// <reference types="./Enumerable.empty.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Enumerable_fromReadonlyArray from "./Enumerable.fromReadonlyArray.js";
const Enumerable_empty = /*@__PURE__*/ (() => pipe([], Enumerable_fromReadonlyArray(), returns))();
export default Enumerable_empty;
