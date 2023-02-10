/// <reference types="./Enumerator.forEach.d.ts" />
import Enumerator_getCurrent from './Enumerator.getCurrent.mjs';
import Enumerator_move from './Enumerator.move.mjs';

const Enumerator_forEach = (f) => enumerator => {
    while (Enumerator_move(enumerator)) {
        f(Enumerator_getCurrent(enumerator));
    }
    return enumerator;
};

export { Enumerator_forEach as default };
