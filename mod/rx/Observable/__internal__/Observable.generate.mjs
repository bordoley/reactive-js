/// <reference types="./Observable.generate.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Continuation_yield_ from '../../../scheduling/Continuation/__internal__/Continuation.yield.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import EnumerableObservable_create from '../../EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_schedule from '../../Observer/__internal__/Observer.schedule.mjs';
import RunnableObservable_create from '../../RunnableObservable/__internal__/RunnableObservable.create.mjs';

const Observable_generate = (generator, initialValue, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!Disposable_isDisposed(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                Continuation_yield_(options);
            }
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
};

export { Observable_generate as default };
