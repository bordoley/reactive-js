/// <reference types="./ReadonlyArrayLike.toRunnable.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import RunnableLike__create from '../../../rx/__internal__/RunnableLike/RunnableLike.create.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';

const ReadonlyArrayLike__toRunnable = 
/*@__PURE__*/ (() => {
    return ReadonlyArrayLike__toContainer((values, startIndex, count) => RunnableLike__create(sink => {
        for (let index = startIndex, cnt = count; !DisposableLike__isDisposed(sink) && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
            sink[SinkLike_notify](values[index]);
        }
    }));
})();

export { ReadonlyArrayLike__toRunnable as default };
