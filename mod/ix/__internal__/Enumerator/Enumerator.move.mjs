/// <reference types="./Enumerator.move.d.ts" />
import '../../../ix.mjs';
import Source$move from '../Source/Source.move.mjs';
import Enumerator$hasCurrent from './Enumerator.hasCurrent.mjs';

const Enumerator$move = (enumerator) => {
    Source$move(enumerator);
    return Enumerator$hasCurrent(enumerator);
};

export { Enumerator$move as default };
