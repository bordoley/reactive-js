/// <reference types="./EnumerableLike.toReadonlyArray.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';
import { getException } from '../../../util/DisposableLike.mjs';
import getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import enumerate from './EnumerableLike.enumerate.mjs';

const toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, enumerate());
    const result = [];
    while (move(enumerator)) {
        result.push(getCurrent(enumerator));
    }
    const error = getException(enumerator);
    if (isSome(error)) {
        throw error.cause;
    }
    return result;
};

export { toReadonlyArray as default };
