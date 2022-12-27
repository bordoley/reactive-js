/// <reference types="./SequenceLike.seek.d.ts" />
import { SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';

const seek = (count) => (seq) => {
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

export { seek as default };
