/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { isSome, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";
const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
        const MergeAllObserver_maxBufferSize = Symbol("MergeAllObserver_maxBufferSize");
        const MergeAllObserver_maxConcurrency = Symbol("MergeAllObserver_maxConcurrency");
        const MergeAllObserver_onDispose = Symbol("MergeAllObserver_onDispose");
        const subscribeNext = (observer) => {
            if (observer[MergeAllObserver_activeCount] <
                observer[MergeAllObserver_maxConcurrency]) {
                const nextObs = observer[PullableQueueLike_pull]();
                if (isSome(nextObs)) {
                    observer[MergeAllObserver_activeCount]++;
                    pipe(nextObs, Observable_forEach(Observer_notifyObserver(observer[DelegatingLike_delegate])), Observable_subscribe(Observer_getScheduler(observer)), Disposable_addTo(observer[DelegatingLike_delegate]), Disposable_onComplete(observer[MergeAllObserver_onDispose]));
                }
                else if (Disposable_isDisposed(observer)) {
                    pipe(observer[DelegatingLike_delegate], Disposable_dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin(), IndexedQueue_fifoQueueMixin()), function MergeAllObserver(instance, delegate, maxBufferSize, maxConcurrency) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            init(delegatingMixin(), instance, delegate);
            init(IndexedQueue_fifoQueueMixin(), instance);
            instance[MergeAllObserver_maxBufferSize] = maxBufferSize;
            instance[MergeAllObserver_maxConcurrency] = maxConcurrency;
            instance[MergeAllObserver_activeCount] = 0;
            instance[MergeAllObserver_onDispose] = () => {
                instance[MergeAllObserver_activeCount]--;
                subscribeNext(instance);
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (Disposable_isDisposed(delegate)) {
                    // FIXME: Clear the queue
                }
                else if (instance[QueueLike_count] +
                    instance[MergeAllObserver_activeCount] ===
                    0) {
                    pipe(delegate, Disposable_dispose());
                }
            }));
            return instance;
        }, props({
            [MergeAllObserver_activeCount]: 0,
            [MergeAllObserver_maxBufferSize]: 0,
            [MergeAllObserver_maxConcurrency]: 0,
            [MergeAllObserver_onDispose]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[QueueLike_push](next);
                // Drop old events if the maxBufferSize has been exceeded
                if (this[QueueLike_count] + this[MergeAllObserver_activeCount] >
                    this[MergeAllObserver_maxBufferSize]) {
                    this[PullableQueueLike_pull]();
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
export default HigherOrderObservable_mergeAll;
