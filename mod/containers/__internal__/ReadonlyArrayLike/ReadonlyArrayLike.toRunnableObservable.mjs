/// <reference types="./ReadonlyArrayLike.toRunnableObservable.d.ts" />
import { createRunnableObservable, createEnumerableObservable } from '../../../__internal__/rx/ObservableLike.create.mjs';
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { schedule } from '../../../rx/ObserverLike.mjs';
import { yield_ } from '../../../scheduling/ContinuationLike.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import toContainer from './ReadonlyArrayLike.toContainer.mjs';

const toRunnableObservable = /*@__PURE__*/ (() => {
    const createArrayObservable = (createObservable, options) => toContainer((values, startIndex, count) => {
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
        return createObservable(onSink);
    });
    return (options) => {
        const createObservableWithType = (f) => hasDelay(options)
            ? createRunnableObservable(f)
            : createEnumerableObservable(f);
        return createArrayObservable(createObservableWithType, options)(options);
    };
})();

export { toRunnableObservable as default };
