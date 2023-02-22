/// <reference types="./Sequence.zip.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { callWith, getLength, isSome, none, pipe } from "../../../functions.js";
import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import ReadonlyArray_keep from "../../ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
const Sequence_zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, ReadonlyArray_map(callWith()), Container_keepType({ keep: ReadonlyArray_keep }, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? {
                [SequenceLike_data]: pipe(nextResults, ReadonlyArray_map(x => x[SequenceLike_data])),
                [SequenceLike_next]: zip(...pipe(nextResults, ReadonlyArray_map(x => x[SequenceLike_next]))),
            }
            : none;
    };
    return zip;
})();
export default Sequence_zip;
