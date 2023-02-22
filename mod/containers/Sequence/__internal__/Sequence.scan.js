/// <reference types="./Sequence.scan.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none } from "../../../functions.js";
const Sequence_scan = /*@__PURE__*/ (() => {
    const _scan = (reducer, acc, seq) => () => {
        const result = seq();
        if (isSome(result)) {
            const nextAcc = reducer(acc, result[SequenceLike_data]);
            return {
                [SequenceLike_data]: nextAcc,
                [SequenceLike_next]: _scan(reducer, nextAcc, result[SequenceLike_next]),
            };
        }
        else {
            return none;
        }
    };
    return (reducer, initialValue) => (seq) => () => _scan(reducer, initialValue(), seq)();
})();
export default Sequence_scan;
