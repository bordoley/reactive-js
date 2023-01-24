/// <reference types="./SequenceLike.zip.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { pipe, callWith, isSome, getLength, none } from '../../../functions.mjs';
import ContainerLike__keepType from '../ContainerLike/ContainerLike.keepType.mjs';
import ReadonlyArrayLike__keep from '../ReadonlyArrayLike/ReadonlyArrayLike.keep.mjs';
import ReadonlyArrayLike__map from '../ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';

const SequenceLike__zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, ReadonlyArrayLike__map(callWith()), ContainerLike__keepType({ keep: ReadonlyArrayLike__keep }, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? {
                [SequenceLike_data]: pipe(nextResults, ReadonlyArrayLike__map(x => x[SequenceLike_data])),
                [SequenceLike_next]: zip(...pipe(nextResults, ReadonlyArrayLike__map(x => x[SequenceLike_next]))),
            }
            : none;
    };
    return zip;
})();

export { SequenceLike__zip as default };
