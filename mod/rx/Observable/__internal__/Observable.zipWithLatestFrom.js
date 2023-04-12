/// <reference types="./Observable.zipWithLatestFrom.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ZipWithLatestFromObserver_TAQueue, __ZipWithLatestFromObserver_hasLatest, __ZipWithLatestFromObserver_otherLatest, __ZipWithLatestFromObserver_selector, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../../__internal__/util.js";
import { none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { BufferLike_capacity, CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_zipWithLatestFrom = 
/*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const notifyDelegate = (observer) => {
            if (observer[__ZipWithLatestFromObserver_TAQueue][CollectionLike_count] >
                0 &&
                observer[__ZipWithLatestFromObserver_hasLatest]) {
                observer[__ZipWithLatestFromObserver_hasLatest] = false;
                const next = observer[__ZipWithLatestFromObserver_TAQueue][QueueLike_dequeue]();
                const result = observer[__ZipWithLatestFromObserver_selector](next, observer[__ZipWithLatestFromObserver_otherLatest]);
                observer[DelegatingLike_delegate][ObserverLike_notify](result);
            }
        };
        return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function ZipWithLatestFromObserver(instance, delegate, other, selector) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__ZipWithLatestFromObserver_selector] = selector;
            instance[__ZipWithLatestFromObserver_TAQueue] =
                IndexedQueue_createFifoQueue(delegate[BufferLike_capacity], delegate[QueueableLike_backpressureStrategy]);
            const disposeDelegate = () => {
                if (instance[DisposableLike_isDisposed] &&
                    otherSubscription[DisposableLike_isDisposed]) {
                    delegate[DisposableLike_dispose]();
                }
            };
            const otherSubscription = pipe(other, Observable_forEach(otherLatest => {
                instance[__ZipWithLatestFromObserver_hasLatest] = true;
                instance[__ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);
                if (instance[DisposableLike_isDisposed] &&
                    instance[__ZipWithLatestFromObserver_TAQueue][CollectionLike_count] === 0) {
                    instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            }), Observable_subscribeWithConfig(delegate, delegate), Disposable_onComplete(disposeDelegate), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(disposeDelegate));
            return instance;
        }, props({
            [__ZipWithLatestFromObserver_hasLatest]: false,
            [__ZipWithLatestFromObserver_otherLatest]: none,
            [__ZipWithLatestFromObserver_selector]: none,
            [__ZipWithLatestFromObserver_TAQueue]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[__ZipWithLatestFromObserver_TAQueue][QueueableLike_enqueue](next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), Observable_lift(other));
})();
export default Observable_zipWithLatestFrom;
