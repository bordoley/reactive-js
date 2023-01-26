/// <reference types="./ReadonlyArray.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservable$create from '../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create.mjs';
import Observer$schedule from '../../../rx/__internal__/Observer/Observer.schedule.mjs';
import RunnableObservable$create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Continuation$yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import ReadonlyArray$toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray$toRunnableObservable = /*@__PURE__*/ (() => ReadonlyArray$toContainer((values, startIndex, count, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let index = startIndex, cnt = count;
        const continuation = () => {
            while (!Disposable$isDisposed(observer) && cnt !== 0) {
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
                    Continuation$yield_(options);
                }
            }
            pipe(observer, Disposable$dispose());
        };
        pipe(observer, Observer$schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable$create(onSink)
        : EnumerableObservable$create(onSink);
}))();

export { ReadonlyArray$toRunnableObservable as default };
