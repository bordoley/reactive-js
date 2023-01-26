/// <reference types="./Sequence.zip.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { pipe, callWith, isSome, getLength, none } from '../../../functions.mjs';
import Container_keepType from '../Container/Container.keepType.mjs';
import ReadonlyArray_keep from '../ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray_map from '../ReadonlyArray/ReadonlyArray.map.mjs';

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

export { Sequence_zip as default };
