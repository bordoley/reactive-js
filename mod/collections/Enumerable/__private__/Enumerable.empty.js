/// <reference types="./Enumerable.empty.d.ts" />

import { pipeLazy } from "../../../functions.js";
import Enumerable_fromReadonlyArray from "./Enumerable.fromReadonlyArray.js";
const Enumerable_empty = /*@__PURE__*/ (() => pipeLazy([], Enumerable_fromReadonlyArray()))();
export default Enumerable_empty;
