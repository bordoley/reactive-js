/// <reference types="./EnumerableLike.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import EnumerableObservableLike__create from '../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import ObserverLike__schedule from '../../../rx/__internal__/ObserverLike/ObserverLike.schedule.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import SinkLike__notifySink from '../../../rx/__internal__/SinkLike/SinkLike.notifySink.mjs';
import ContinuationLike__yield_ from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/SchedulerLike.options.mjs';
import DisposableLike__bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import SourceLike__move from '../SourceLike/SourceLike.move.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toRunnableObservable = (options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, EnumerableLike__enumerate(), DisposableLike__bindTo(observer));
        pipe(observer, ObserverLike__schedule(() => {
            while (!DisposableLike__isDisposed(observer) && SourceLike__move(enumerator)) {
                pipe(enumerator, EnumeratorLike__getCurrent, SinkLike__notifySink(observer));
                ContinuationLike__yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
};

export { EnumerableLike__toRunnableObservable as default };
