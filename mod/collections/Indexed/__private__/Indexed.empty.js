/// <reference types="./Indexed.empty.d.ts" />

import { pipe } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
const _empty = /*@__PURE__*/ (() => pipe(ReadonlyArray.empty(), ReadonlyArray.toIndexed()))();
const Indexed_empty = () => _empty;
export default Indexed_empty;
