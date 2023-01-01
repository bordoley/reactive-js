/// <reference types="./SequenceLike.concatAll.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, none } from '../../../functions.mjs';

const SequenceLike__concatAll = () => (seq) => {
    const continueWith = (result, continuation) => {
        if (isSome(result)) {
            return {
                [SequenceLike_data]: result[SequenceLike_data],
                [SequenceLike_next]: () => continueWith(result[SequenceLike_next](), continuation),
            };
        }
        else {
            return flattenIter(continuation());
        }
    };
    const flattenIter = (result) => {
        if (isSome(result)) {
            return continueWith(result[SequenceLike_data](), result[SequenceLike_next]);
        }
        else {
            return none;
        }
    };
    return () => flattenIter(seq());
};

export { SequenceLike__concatAll as default };
