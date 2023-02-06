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
        const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
        const MergeAllObserver_delegate = Symbol("MergeAllObserver_delegate");
        const MergeAllObserver_maxBufferSize = Symbol("MergeAllObserver_maxBufferSize");
        const MergeAllObserver_maxConcurrency = Symbol("MergeAllObserver_maxConcurrency");
        const MergeAllObserver_onDispose = Symbol("MergeAllObserver_onDispose");
        const MergeAllObserver_queue = Symbol("MergeAllObserver_queue");
        const subscribeNext = (observer) => {
            if (observer[MergeAllObserver_activeCount] <
                observer[MergeAllObserver_maxConcurrency]) {
                const nextObs = observer[MergeAllObserver_queue].shift();
                if (isSome(nextObs)) {
                    observer[MergeAllObserver_activeCount]++;
                    pipe(nextObs, Observable_forEach(Sink_notifySink(observer[MergeAllObserver_delegate])), Observable_subscribe(Observer_getScheduler(observer)), Disposable_addTo(observer[MergeAllObserver_delegate]), Disposable_onComplete(observer[MergeAllObserver_onDispose]));
                }
                else if (Disposable_isDisposed(observer)) {
                    pipe(observer[MergeAllObserver_delegate], Disposable_dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function MergeAllObserver(instance, delegate, maxBufferSize, maxConcurrency) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            instance[MergeAllObserver_delegate] = delegate;
            instance[MergeAllObserver_maxBufferSize] = maxBufferSize;
            instance[MergeAllObserver_maxConcurrency] = maxConcurrency;
            instance[MergeAllObserver_activeCount] = 0;
            instance[MergeAllObserver_onDispose] = () => {
                instance[MergeAllObserver_activeCount]--;
                subscribeNext(instance);
            };
            instance[MergeAllObserver_queue] = [];
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (Disposable_isDisposed(delegate)) {
                    instance[MergeAllObserver_queue].length = 0;
                }
                else if (getLength(instance[MergeAllObserver_queue]) +
                    instance[MergeAllObserver_activeCount] ===
                    0) {
                    pipe(instance[MergeAllObserver_delegate], Disposable_dispose());
                }
            }));
            return instance;
        }, props({
            [MergeAllObserver_activeCount]: 0,
            [MergeAllObserver_delegate]: none,
            [MergeAllObserver_maxBufferSize]: 0,
            [MergeAllObserver_maxConcurrency]: 0,
            [MergeAllObserver_onDispose]: none,
            [MergeAllObserver_queue]: none,
        }), {
            [SinkLike_notify](next) {
                const { [MergeAllObserver_queue]: queue } = this;
                queue.push(next);
                // Drop old events if the maxBufferSize has been exceeded
                if (getLength(queue) + this[MergeAllObserver_activeCount] >
                    this[MergeAllObserver_maxBufferSize]) {
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
