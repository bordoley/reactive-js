/// <reference types="./Enumerator.d.ts" />
import '../ix.mjs';
import Enumerator$forEach from './__internal__/Enumerator/Enumerator.forEach.mjs';
import Enumerator$getCurrent from './__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from './__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator$move from './__internal__/Enumerator/Enumerator.move.mjs';

const forEach = Enumerator$forEach;
const getCurrent = Enumerator$getCurrent;
const hasCurrent = Enumerator$hasCurrent;
const move = Enumerator$move;

export { forEach, getCurrent, hasCurrent, move };
