/// <reference types="./EnumerableLike.toReadonlyArray.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import DisposableLike__getError from '../../../util/__internal__/DisposableLike/DisposableLike.getError.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, EnumerableLike__enumerate());
    const result = [];
    while (EnumeratorLike__move(enumerator)) {
        result.push(EnumeratorLike__getCurrent(enumerator));
    }
    const error = DisposableLike__getError(enumerator);
    return isSome(error) ? raise(error) : result;
};

export { EnumerableLike__toReadonlyArray as default };
