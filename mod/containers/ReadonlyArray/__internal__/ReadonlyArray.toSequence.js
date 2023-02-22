/// <reference types="./ReadonlyArray.toSequence.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { none } from "../../../functions.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const _arraySequence = (arr, index, count) => count !== 0 && index >= 0
    ? {
        [SequenceLike_data]: arr[index],
        [SequenceLike_next]: () => _arraySequence(arr, count > 0 ? index + 1 : index - 1, count > 0 ? count - 1 : count + 1),
    }
    : none;
const ReadonlyArray_toSequence = 
/*@__PURE__*/ ReadonlyArray_toContainer((values, startIndex, count) => () => _arraySequence(values, startIndex, count));
export default ReadonlyArray_toSequence;
