/// <reference types="./EnumeratorLike.forEach.d.ts" />
import getCurrent from './EnumeratorLike.getCurrent.mjs';
import move from './EnumeratorLike.move.mjs';

const forEach = (f) => enumerator => {
    while (move(enumerator)) {
        f(getCurrent(enumerator));
    }
    return enumerator;
};

export { forEach as default };
