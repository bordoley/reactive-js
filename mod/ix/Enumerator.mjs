/// <reference types="./Enumerator.d.ts" />
import '../ix.mjs';
import Enumerator_forEach from './__internal__/Enumerator/Enumerator.forEach.mjs';
import Enumerator_getCurrent from './__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from './__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator_move from './__internal__/Enumerator/Enumerator.move.mjs';

const forEach = Enumerator_forEach;
const getCurrent = Enumerator_getCurrent;
const hasCurrent = Enumerator_hasCurrent;
const move = Enumerator_move;

export { forEach, getCurrent, hasCurrent, move };
