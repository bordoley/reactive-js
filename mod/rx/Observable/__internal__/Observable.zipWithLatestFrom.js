/// <reference types="./Observable.zipWithLatestFrom.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_zipWithLatestFrom = 
/*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const ZipWithLatestFromObserver_hasLatest = Symbol("ZipWithLatestFromObserver_hasLatest");
        const ZipWithLatestFromObserver_otherLatest = Symbol("ZipWithLatestFromObserver_otherLatest");
        const ZipWithLatestFromObserver_selector = Symbol("ZipWithLatestFromObserver_selector");
        const notifyDelegate = (observer) => {
            if (observer[QueueLike_count] > 0 &&
                observer[ZipWithLatestFromObserver_hasLatest]) {
                observer[ZipWithLatestFromObserver_hasLatest] = false;
                const next = observer[PullableQueueLike_pull]();
                const result = observer[ZipWithLatestFromObserver_selector](next, observer[ZipWithLatestFromObserver_otherLatest]);
                observer[DelegatingLike_delegate][ObserverLike_notify](result);
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin(), IndexedQueue_fifoQueueMixin()), function ZipWithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(delegatingMixin(), instance, delegate);
            init(IndexedQueue_fifoQueueMixin(), instance);
            instance[ZipWithLatestFromObserver_selector] = selector;
            const disposeDelegate = () => {
                if (instance[DisposableLike_isDisposed] &&
                    otherSubscription[DisposableLike_isDisposed]) {
                    delegate[DisposableLike_dispose]();
                }
            };
            const otherSubscription = pipe(other, Observable_forEach(otherLatest => {
                instance[ZipWithLatestFromObserver_hasLatest] = true;
                instance[ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);
                if (instance[DisposableLike_isDisposed] &&
                    instance[QueueLike_count] === 0) {
                    instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            }), Observable_subscribe(delegate[ObserverLike_scheduler]), Disposable_onComplete(disposeDelegate), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(disposeDelegate));
            return instance;
        }, props({
            [ZipWithLatestFromObserver_hasLatest]: false,
            [ZipWithLatestFromObserver_otherLatest]: none,
            [ZipWithLatestFromObserver_selector]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[QueueLike_push](next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), Observable_lift(other[ObservableLike_isEnumerable], other[ObservableLike_isRunnable]));
})();
export default Observable_zipWithLatestFrom;
