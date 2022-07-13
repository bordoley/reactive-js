/// <reference types="./EnumeratorLike.d.ts" />
import { move } from './InteractiveSourceLike.mjs';

const EnumeratorLike_current = Symbol("EnumeratorLike_current");
const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
const getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
const hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
const forEach = (f) => enumerator => {
    while (move(enumerator) && hasCurrent(enumerator)) {
        f(getCurrent(enumerator));
    }
    return enumerator;
};

export { EnumeratorLike_current, EnumeratorLike_hasCurrent, forEach, getCurrent, hasCurrent };
