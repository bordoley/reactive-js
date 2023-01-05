/// <reference types="./ReadonlyArrayLike.toRunnableObservable.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { schedule } from '../../../rx/ObserverLike.mjs';
import EnumerableObservableLike__create from '../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import { yield_ } from '../../../scheduling/ContinuationLike.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';

const ReadonlyArrayLike__toRunnableObservable = /*@__PURE__*/ (() => ReadonlyArrayLike__toContainer((values, startIndex, count, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
            while (!isDisposed(observer) && cnt !== 0) {
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
                    yield_(options);
                }
            }
            pipe(observer, dispose());
        };
        pipe(observer, schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
}))();

export { ReadonlyArrayLike__toRunnableObservable as default };
