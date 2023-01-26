/// <reference types="./Sequence.zip.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { pipe, callWith, isSome, getLength, none } from '../../../functions.mjs';
import Container$keepType from '../Container/Container.keepType.mjs';
import ReadonlyArray$keep from '../ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray$map from '../ReadonlyArray/ReadonlyArray.map.mjs';

const Sequence$zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, ReadonlyArray$map(callWith()), Container$keepType({ keep: ReadonlyArray$keep }, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? {
                [SequenceLike_data]: pipe(nextResults, ReadonlyArray$map(x => x[SequenceLike_data])),
                [SequenceLike_next]: zip(...pipe(nextResults, ReadonlyArray$map(x => x[SequenceLike_next]))),
            }
            : none;
    };
    return zip;
})();

export { Sequence$zip as default };
