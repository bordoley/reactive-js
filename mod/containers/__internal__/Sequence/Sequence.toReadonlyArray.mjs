/// <reference types="./Sequence.toReadonlyArray.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';

const Sequence$toReadonlyArray = () => (seq) => {
    const result = [];
    let next = seq();
    while (isSome(next)) {
        result.push(next[SequenceLike_data]);
        next = next[SequenceLike_next]();
    }
    return result;
};

export { Sequence$toReadonlyArray as default };
