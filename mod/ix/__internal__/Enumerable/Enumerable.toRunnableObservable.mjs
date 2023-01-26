/// <reference types="./Enumerable.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import EnumerableObservable$create from '../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create.mjs';
import Observer$schedule from '../../../rx/__internal__/Observer/Observer.schedule.mjs';
import RunnableObservable$create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Sink$notifySink from '../../../rx/__internal__/Sink/Sink.notifySink.mjs';
import Continuation$yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Source$move from '../Source/Source.move.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$toRunnableObservable = (options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, Enumerable$enumerate(), Disposable$bindTo(observer));
        pipe(observer, Observer$schedule(() => {
            while (!Disposable$isDisposed(observer) && Source$move(enumerator)) {
                pipe(enumerator, Enumerator$getCurrent, Sink$notifySink(observer));
                Continuation$yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable$create(onSink)
        : EnumerableObservable$create(onSink);
};

export { Enumerable$toRunnableObservable as default };
