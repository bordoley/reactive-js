/// <reference types="./EnumeratorLike.d.ts" />
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../util.mjs';
import { move as move$1 } from './SourceLike.mjs';

const getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
const hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
const move = (enumerator) => {
    move$1(enumerator);
    return hasCurrent(enumerator);
};
const forEach = (f) => enumerator => {
    while (move(enumerator)) {
        f(getCurrent(enumerator));
    }
    return enumerator;
};

export { forEach, getCurrent, hasCurrent, move };
