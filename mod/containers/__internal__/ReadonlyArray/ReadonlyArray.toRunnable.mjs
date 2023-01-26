/// <reference types="./ReadonlyArray.toRunnable.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import Runnable$create from '../../../rx/__internal__/Runnable/Runnable.create.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import ReadonlyArray$toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray$toRunnable = 
/*@__PURE__*/ (() => {
    return ReadonlyArray$toContainer((values, startIndex, count) => Runnable$create(sink => {
        for (let index = startIndex, cnt = count; !Disposable$isDisposed(sink) && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
            sink[SinkLike_notify](values[index]);
        }
    }));
})();

export { ReadonlyArray$toRunnable as default };
