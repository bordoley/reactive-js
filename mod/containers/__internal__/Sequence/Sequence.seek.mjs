/// <reference types="./Sequence.seek.d.ts" />
import { SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';

const Sequence$seek = (count) => (seq) => {
    if (count <= 0) {
        return seq;
    }
    else {
        let retval = seq;
        for (let i = 0; i < count; i++) {
            const result = retval();
            if (isSome(result)) {
                retval = result[SequenceLike_next];
            }
        }
        return retval;
    }
};

export { Sequence$seek as default };
