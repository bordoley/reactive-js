/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { isSome, pipe, getLength, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observable_forEach from '../Observable/Observable.forEach.mjs';
import Observable_subscribe from '../Observable/Observable.subscribe.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_notifySink from '../Sink/Sink.notifySink.mjs';

const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, Observable_forEach(Sink_notifySink(observer.delegate)), Observable_subscribe(Observer_getScheduler(observer)), Disposable_addTo(observer.delegate), Disposable_onComplete(observer.onDispose));
                }
                else if (Disposable_isDisposed(observer)) {
                    pipe(observer.delegate, Disposable_dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;
            instance.maxConcurrency = maxConcurrency;
            instance.activeCount = 0;
            instance.onDispose = () => {
                instance.activeCount--;
                subscribeNext(instance);
            };
            instance.queue = [];
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (Disposable_isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, Disposable_dispose());
                }
            }));
            return instance;
        }, props({
            activeCount: 0,
            delegate: none,
            maxBufferSize: 0,
            maxConcurrency: 0,
            onDispose: none,
            queue: none,
        }), {
            [SinkLike_notify](next) {
                const { queue } = this;
                queue.push(next);
                // Drop old events if the maxBufferSize has been exceeded
                if (getLength(queue) + this.activeCount > this.maxBufferSize) {
                    queue.shift();
                }
                subscribeNext(this);
            },
        }));
    })();
    return (options = {}) => {
        const { maxBufferSize = MAX_SAFE_INTEGER, maxConcurrency = MAX_SAFE_INTEGER, } = options;
        const f = pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency));
        return lift(f);
    };
};

export { HigherOrderObservable_mergeAll as default };
