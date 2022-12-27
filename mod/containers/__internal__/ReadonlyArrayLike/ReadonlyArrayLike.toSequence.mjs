/// <reference types="./ReadonlyArrayLike.toSequence.d.ts" />
import { none } from '../../../functions.mjs';
import toContainer from './ReadonlyArrayLike.toContainer.mjs';

const toSequence = /*@__PURE__*/ (() => {
    const _arraySequence = (arr, index, count) => count !== 0 && index >= 0
        ? {
            data: arr[index],
            next: () => _arraySequence(arr, count > 0 ? index + 1 : index - 1, count > 0 ? count - 1 : count + 1),
        }
        : none;
    return toContainer((values, startIndex, count) => () => _arraySequence(values, startIndex, count));
})();

export { toSequence as default };
