/// <reference types="./Enumerator.d.ts" />
import '../ix.mjs';
import Enumerator_forEach from './Enumerator/__internal__/Enumerator.forEach.mjs';
import Enumerator_getCurrent from './Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from './Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import Enumerator_move from './Enumerator/__internal__/Enumerator.move.mjs';

const forEach = Enumerator_forEach;
const getCurrent = Enumerator_getCurrent;
const hasCurrent = Enumerator_hasCurrent;
const move = Enumerator_move;
/** @ignore */
const Enumerator = {
    forEach,
    getCurrent,
    hasCurrent,
    move,
};

export { Enumerator as default, forEach, getCurrent, hasCurrent, move };
