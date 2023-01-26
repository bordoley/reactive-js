/// <reference types="./Observable.generate.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Continuation$yield_ from '../../../scheduling/__internal__/Continuation/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import EnumerableObservable$create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observer$schedule from '../Observer/Observer.schedule.mjs';
import RunnableObservable$create from '../RunnableObservable/RunnableObservable.create.mjs';

const Observable$generate = (generator, initialValue, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!Disposable$isDisposed(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                Continuation$yield_(options);
            }
        };
        pipe(observer, Observer$schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable$create(onSink)
        : EnumerableObservable$create(onSink);
};

export { Observable$generate as default };
