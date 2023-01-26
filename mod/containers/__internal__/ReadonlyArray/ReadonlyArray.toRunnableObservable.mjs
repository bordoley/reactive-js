/// <reference types="./ReadonlyArray.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservable_create from '../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create.mjs';
import Observer_schedule from '../../../rx/__internal__/Observer/Observer.schedule.mjs';
import RunnableObservable_create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Continuation_yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray_toRunnableObservable = /*@__PURE__*/ (() => ReadonlyArray_toContainer((values, startIndex, count, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
            while (!Disposable_isDisposed(observer) && cnt !== 0) {
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
                    Continuation_yield_(options);
                }
            }
            pipe(observer, Disposable_dispose());
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
}))();

export { ReadonlyArray_toRunnableObservable as default };
