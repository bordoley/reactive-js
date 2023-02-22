/// <reference types="./Sequence.distinctUntilChanged.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome, none, strictEquality } from "../../../functions.js";
const Sequence_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const _distinctUntilChanged = (equality, prevValue, next) => () => {
        let retval = next();
        while (true) {
            if (isSome(retval)) {
                if (!equality(prevValue, retval[SequenceLike_data])) {
                    return {
                        [SequenceLike_data]: retval[SequenceLike_data],
                        [SequenceLike_next]: _distinctUntilChanged(equality, retval[SequenceLike_data], retval[SequenceLike_next]),
                    };
                }
                else {
                    retval = retval[SequenceLike_next]();
                }
            }
            else {
                return retval;
            }
        }
    };
    return (options = {}) => (seq) => () => {
        const { equality = strictEquality } = options;
        const result = seq();
        return isSome(result)
            ? {
                [SequenceLike_data]: result[SequenceLike_data],
                [SequenceLike_next]: _distinctUntilChanged(equality, result[SequenceLike_data], result[SequenceLike_next]),
            }
            : none;
    };
})();
export default Sequence_distinctUntilChanged;
