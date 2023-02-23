/// <reference types="./Sequence.skipFirst.d.ts" />

import { SequenceLike_next, } from "../../../containers.js";
import { isSome } from "../../../functions.js";
const Sequence_seek = (count) => (seq) => {
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
const Sequence_skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return Sequence_seek(count)(seq)();
};
export default Sequence_skipFirst;
