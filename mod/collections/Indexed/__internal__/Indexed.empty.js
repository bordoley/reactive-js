/// <reference types="./Indexed.empty.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexed.js";
const _empty = /*@__PURE__*/ (() => pipe(ReadonlyArray_empty(), ReadonlyArray_toIndexed()))();
const Indexed_empty = () => _empty;
export default Indexed_empty;
