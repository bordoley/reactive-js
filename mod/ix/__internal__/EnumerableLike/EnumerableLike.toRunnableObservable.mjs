/// <reference types="./EnumerableLike.toRunnableObservable.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { schedule } from '../../../rx/ObserverLike.mjs';
import { notifySink } from '../../../rx/SinkLike.mjs';
import EnumerableObservableLike__create from '../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import { yield_ } from '../../../scheduling/ContinuationLike.mjs';
import { bindTo, isDisposed } from '../../../util/DisposableLike.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import SourceLike__move from '../SourceLike/SourceLike.move.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toRunnableObservable = (options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, EnumerableLike__enumerate(), bindTo(observer));
        pipe(observer, schedule(() => {
            while (!isDisposed(observer) && SourceLike__move(enumerator)) {
                pipe(enumerator, EnumeratorLike__getCurrent, notifySink(observer));
                yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
};

export { EnumerableLike__toRunnableObservable as default };
