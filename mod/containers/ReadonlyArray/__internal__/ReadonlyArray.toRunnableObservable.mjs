/// <reference types="./ReadonlyArray.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservable_create from '../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_schedule from '../../../rx/Observer/__internal__/Observer.schedule.mjs';
import RunnableObservable_create from '../../../rx/RunnableObservable/__internal__/RunnableObservable.create.mjs';
import Continuation_yield_ from '../../../scheduling/Continuation/__internal__/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray_toRunnableObservable = /*@__PURE__*/ (() => ReadonlyArray_toContainer((values, startIndex, count, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
            while (!observer[DisposableLike_isDisposed] && cnt !== 0) {
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
