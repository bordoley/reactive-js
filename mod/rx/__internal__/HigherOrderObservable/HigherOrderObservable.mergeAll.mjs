/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { isSome, pipe, getLength, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observable$forEach from '../Observable/Observable.forEach.mjs';
import Observable$subscribe from '../Observable/Observable.subscribe.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notifySink from '../Sink/Sink.notifySink.mjs';

const HigherOrderObservable$mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = Observer$mixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, Observable$forEach(Sink$notifySink(observer.delegate)), Observable$subscribe(Observer$getScheduler(observer)), Disposable$addTo(observer.delegate), Disposable$onComplete(observer.onDispose));
                }
                else if (Disposable$isDisposed(observer)) {
                    pipe(observer.delegate, Disposable$dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(Disposable$mixin, instance);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;
            instance.maxConcurrency = maxConcurrency;
            instance.activeCount = 0;
            instance.onDispose = () => {
                instance.activeCount--;
                subscribeNext(instance);
            };
            instance.queue = [];
            pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
                if (Disposable$isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, Disposable$dispose());
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

export { HigherOrderObservable$mergeAll as default };
