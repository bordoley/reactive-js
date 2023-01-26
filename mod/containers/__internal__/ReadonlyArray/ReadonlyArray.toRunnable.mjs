/// <reference types="./ReadonlyArray.toRunnable.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import Runnable_create from '../../../rx/__internal__/Runnable/Runnable.create.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray_toRunnable = 
/*@__PURE__*/ (() => {
    return ReadonlyArray_toContainer((values, startIndex, count) => Runnable_create(sink => {
        for (let index = startIndex, cnt = count; !Disposable_isDisposed(sink) && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
            sink[SinkLike_notify](values[index]);
        }
    }));
})();

export { ReadonlyArray_toRunnable as default };
