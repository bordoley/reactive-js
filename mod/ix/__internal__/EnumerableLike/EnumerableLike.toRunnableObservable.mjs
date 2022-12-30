/// <reference types="./EnumerableLike.toRunnableObservable.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { schedule } from '../../../rx/ObserverLike.mjs';
import { notifySink } from '../../../rx/SinkLike.mjs';
import create$1 from '../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import { yield_ } from '../../../scheduling/ContinuationLike.mjs';
import { bindTo, isDisposed } from '../../../util/DisposableLike.mjs';
import getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import move from '../SourceLike/SourceLike.move.mjs';
import enumerate from './EnumerableLike.enumerate.mjs';

const toRunnableObservable = (options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, enumerate(), bindTo(observer));
        pipe(observer, schedule(() => {
            while (!isDisposed(observer) && move(enumerator)) {
                pipe(enumerator, getCurrent, notifySink(observer));
                yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? create(onSink)
        : create$1(onSink);
};

export { toRunnableObservable as default };
