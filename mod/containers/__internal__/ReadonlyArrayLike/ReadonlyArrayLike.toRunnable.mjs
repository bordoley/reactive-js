/// <reference types="./ReadonlyArrayLike.toRunnable.d.ts" />
import { create } from '../../../__internal__/rx/RunnableLike.create.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { isDisposed } from '../../../util/DisposableLike.mjs';
import toContainer from './ReadonlyArrayLike.toContainer.mjs';

const toRunnable = /*@__PURE__*/ (() => {
    return toContainer((values, startIndex, count) => create(sink => {
        for (let index = startIndex, cnt = count; !isDisposed(sink) && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
            sink[SinkLike_notify](values[index]);
        }
    }));
})();

export { toRunnable as default };
