/// <reference types="./Enumerator.forEach.d.ts" />
import Enumerator$getCurrent from './Enumerator.getCurrent.mjs';
import Enumerator$move from './Enumerator.move.mjs';

const Enumerator$forEach = (f) => enumerator => {
    while (Enumerator$move(enumerator)) {
        f(Enumerator$getCurrent(enumerator));
    }
    return enumerator;
};

export { Enumerator$forEach as default };
