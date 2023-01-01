/// <reference types="./EnumeratorLike.forEach.d.ts" />
import EnumeratorLike__getCurrent from './EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from './EnumeratorLike.move.mjs';

const EnumeratorLike__forEach = (f) => enumerator => {
    while (EnumeratorLike__move(enumerator)) {
        f(EnumeratorLike__getCurrent(enumerator));
    }
    return enumerator;
};

export { EnumeratorLike__forEach as default };
