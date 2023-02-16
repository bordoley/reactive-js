/// <reference types="./ReadonlyArray.toRunnable.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import Runnable_create from '../../../rx/Runnable/__internal__/Runnable.create.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray_toRunnable = 
/*@__PURE__*/ ReadonlyArray_toContainer((values, startIndex, count) => Runnable_create(sink => {
    for (let index = startIndex, cnt = count; !sink[DisposableLike_isDisposed] && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
        sink[SinkLike_notify](values[index]);
    }
}));

export { ReadonlyArray_toRunnable as default };
