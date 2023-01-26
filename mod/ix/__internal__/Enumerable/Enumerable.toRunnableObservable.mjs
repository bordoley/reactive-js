/// <reference types="./Enumerable.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import EnumerableObservable_create from '../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create.mjs';
import Observer_schedule from '../../../rx/__internal__/Observer/Observer.schedule.mjs';
import RunnableObservable_create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Sink_notifySink from '../../../rx/__internal__/Sink/Sink.notifySink.mjs';
import Continuation_yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Source_move from '../Source/Source.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_toRunnableObservable = (options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_bindTo(observer));
        pipe(observer, Observer_schedule(() => {
            while (!Disposable_isDisposed(observer) && Source_move(enumerator)) {
                pipe(enumerator, Enumerator_getCurrent, Sink_notifySink(observer));
                Continuation_yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
};

export { Enumerable_toRunnableObservable as default };
