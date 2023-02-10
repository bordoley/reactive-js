/// <reference types="./Enumerator.move.d.ts" />
import '../../../ix.mjs';
import Source_move from '../../Source/__internal__/Source.move.mjs';
import Enumerator_hasCurrent from './Enumerator.hasCurrent.mjs';

const Enumerator_move = (enumerator) => {
    Source_move(enumerator);
    return Enumerator_hasCurrent(enumerator);
};

export { Enumerator_move as default };
