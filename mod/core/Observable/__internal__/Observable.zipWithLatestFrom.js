/// <reference types="./Observable.zipWithLatestFrom.d.ts" />

import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __WithLatestLike_hasLatest, __WithLatestLike_otherLatest, __WithLatestLike_selector, __ZipWithLatestFromObserver_TAQueue, } from "../../../__internal__/symbols.js";
import { BufferLike_capacity, CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import Queue_createIndexedQueue from "../../../core/Queue/__internal__/Queue.createIndexedQueue.js";
import { none, partial, pipe } from "../../../functions.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
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
                observer[__WithLatestLike_hasLatest]) {
                observer[__WithLatestLike_hasLatest] = false;
                const next = observer[__ZipWithLatestFromObserver_TAQueue][QueueLike_dequeue]();
                const result = observer[__WithLatestLike_selector](next, observer[__WithLatestLike_otherLatest]);
                observer[DelegatingLike_delegate][ObserverLike_notify](result);
            }
        };
        return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function ZipWithLatestFromObserver(instance, delegate, other, selector) {
            Observer_mixin_initFromDelegate(instance, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__WithLatestLike_selector] = selector;
            instance[__ZipWithLatestFromObserver_TAQueue] =
                Queue_createIndexedQueue(delegate[BufferLike_capacity], delegate[QueueableLike_backpressureStrategy]);
            const disposeDelegate = () => {
                if (instance[DisposableLike_isDisposed] &&
                    otherSubscription[DisposableLike_isDisposed]) {
                    delegate[DisposableLike_dispose]();
                }
            };
            const otherSubscription = pipe(other, Observable_forEach(otherLatest => {
                instance[__WithLatestLike_hasLatest] = true;
                instance[__WithLatestLike_otherLatest] = otherLatest;
                notifyDelegate(instance);
                if (instance[DisposableLike_isDisposed] &&
                    instance[__ZipWithLatestFromObserver_TAQueue][CollectionLike_count] === 0) {
                    instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            }), Observable_subscribeWithConfig(delegate, delegate), Disposable_onComplete(disposeDelegate), Disposable_addTo(delegate));
            pipe(instance, Disposable_onComplete(disposeDelegate));
            return instance;
        }, props({
            [__WithLatestLike_hasLatest]: false,
            [__WithLatestLike_otherLatest]: none,
            [__WithLatestLike_selector]: none,
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
