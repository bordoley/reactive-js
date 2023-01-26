/// <reference types="./ReadonlyArray.toSequence.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { none } from '../../../functions.mjs';
import ReadonlyArray$toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray$toSequence = 
/*@__PURE__*/ (() => {
    const _arraySequence = (arr, index, count) => count !== 0 && index >= 0
        ? {
            [SequenceLike_data]: arr[index],
            [SequenceLike_next]: () => _arraySequence(arr, count > 0 ? index + 1 : index - 1, count > 0 ? count - 1 : count + 1),
        }
        : none;
    return ReadonlyArray$toContainer((values, startIndex, count) => () => _arraySequence(values, startIndex, count));
})();

export { ReadonlyArray$toSequence as default };
