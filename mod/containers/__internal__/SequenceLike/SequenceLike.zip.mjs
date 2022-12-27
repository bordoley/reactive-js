/// <reference types="./SequenceLike.zip.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { pipe, callWith, isSome, getLength, none } from '../../../functions.mjs';
import { keepType } from '../../ContainerLike.mjs';
import { map, keepT } from '../../ReadonlyArrayLike.mjs';

const zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, map(callWith()), keepType(keepT, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? {
                [SequenceLike_data]: pipe(nextResults, map(x => x[SequenceLike_data])),
                [SequenceLike_next]: zip(...pipe(nextResults, map(x => x[SequenceLike_next]))),
            }
            : none;
    };
    return zip;
})();

export { zip as default };
