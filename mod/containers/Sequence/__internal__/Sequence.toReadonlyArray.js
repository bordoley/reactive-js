/// <reference types="./Sequence.toReadonlyArray.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome } from "../../../functions.js";
const Sequence_toReadonlyArray = () => (seq) => {
    const result = [];
    let next = seq();
    while (isSome(next)) {
        result.push(next[SequenceLike_data]);
        next = next[SequenceLike_next]();
    }
    return result;
};
export default Sequence_toReadonlyArray;
