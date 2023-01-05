/// <reference types="./HigherOrderObservableLike.mergeAll.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../__internal__/constants.mjs';
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { isSome, pipe, getLength, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notifySink } from '../../SinkLike.mjs';
import ObservableLike__forEach from '../ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__subscribe from '../ObservableLike/ObservableLike.subscribe.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';

const HigherOrderObservableLike__mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, ObservableLike__forEach(notifySink(observer.delegate)), ObservableLike__subscribe(getScheduler(observer)), DisposableLike__addTo(observer.delegate), DisposableLike__onComplete(observer.onDispose));
                }
                else if (DisposableLike__isDisposed(observer)) {
                    pipe(observer.delegate, DisposableLike__dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;
            instance.maxConcurrency = maxConcurrency;
            instance.activeCount = 0;
            instance.onDispose = () => {
                instance.activeCount--;
                subscribeNext(instance);
            };
            instance.queue = [];
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
                if (DisposableLike__isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, DisposableLike__dispose());
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
        return lift(pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency)));
    };
};

export { HigherOrderObservableLike__mergeAll as default };
