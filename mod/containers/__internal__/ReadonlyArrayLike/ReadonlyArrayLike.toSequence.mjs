/// <reference types="./ReadonlyArrayLike.toSequence.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none } from '../../../functions.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';

const ReadonlyArrayLike__toSequence = 
/*@__PURE__*/ (() => {
    const _arraySequence = (arr, index, count) => count !== 0 && index >= 0
        ? {
            [SequenceLike_data]: arr[index],
            [SequenceLike_next]: () => _arraySequence(arr, count > 0 ? index + 1 : index - 1, count > 0 ? count - 1 : count + 1),
        }
        : none;
    return ReadonlyArrayLike__toContainer((values, startIndex, count) => () => _arraySequence(values, startIndex, count));
})();

export { ReadonlyArrayLike__toSequence as default };
