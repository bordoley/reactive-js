/// <reference types="./Enumerator.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../ix.js";
import Enumerator_forEach from "./Enumerator/__internal__/Enumerator.forEach.js";
import Enumerator_getCurrent from "./Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "./Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "./Enumerator/__internal__/Enumerator.move.js";
export const forEach = Enumerator_forEach;
export const getCurrent = Enumerator_getCurrent;
export const hasCurrent = Enumerator_hasCurrent;
export const move = Enumerator_move;
/** @ignore */
const Enumerator = {
    forEach,
    getCurrent,
    hasCurrent,
    move,
};
export default Enumerator;
