/// <reference types="./ReadonlyArrayLike.toRunnableObservable.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservableLike__create from '../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import ObserverLike__schedule from '../../../rx/__internal__/ObserverLike/ObserverLike.schedule.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import ContinuationLike__yield_ from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';

const ReadonlyArrayLike__toRunnableObservable = /*@__PURE__*/ (() => ReadonlyArrayLike__toContainer((values, startIndex, count, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
            while (!DisposableLike__isDisposed(observer) && cnt !== 0) {
                const value = values[index];
                if (cnt > 0) {
                    index++;
                    cnt--;
                }
                else {
                    index--;
                    cnt++;
                }
                observer[SinkLike_notify](value);
                if (cnt !== 0) {
                    ContinuationLike__yield_(options);
                }
            }
            pipe(observer, DisposableLike__dispose());
        };
        pipe(observer, ObserverLike__schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
}))();

export { ReadonlyArrayLike__toRunnableObservable as default };
