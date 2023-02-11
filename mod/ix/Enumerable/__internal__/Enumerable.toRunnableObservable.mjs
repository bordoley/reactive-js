/// <reference types="./Enumerable.toRunnableObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_hasCurrent, EnumeratorLike_current } from '../../../ix.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservable_create from '../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_schedule from '../../../rx/Observer/__internal__/Observer.schedule.mjs';
import RunnableObservable_create from '../../../rx/RunnableObservable/__internal__/RunnableObservable.create.mjs';
import { __yield } from '../../../scheduling/Continuation/effects.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_bindTo from '../../../util/Disposable/__internal__/Disposable.bindTo.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_toRunnableObservable = (options) => enumerable => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_bindTo(observer));
        pipe(observer, Observer_schedule(() => {
            while (!observer[DisposableLike_isDisposed] &&
                (enumerator[SourceLike_move](),
                    enumerator[EnumeratorLike_hasCurrent])) {
                observer[SinkLike_notify](enumerator[EnumeratorLike_current]);
                __yield(delay);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
};

export { Enumerable_toRunnableObservable as default };
