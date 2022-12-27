/// <reference types="./EnumerableLike.toRunnableObservable.d.ts" />
import { createRunnableObservable, createEnumerableObservable } from '../../../__internal__/rx/ObservableLike.create.mjs';
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { schedule } from '../../../rx/ObserverLike.mjs';
import { notifySink } from '../../../rx/SinkLike.mjs';
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
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
};

export { toRunnableObservable as default };
