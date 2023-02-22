/// <reference types="./Observable.zipWithLatestFrom.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { getLength, isEmpty, none, partial, pipe, } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_notify from "../../Sink/__internal__/Sink.notify.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_zipWithLatestFrom = 
/*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const ZipWithLatestFromObserver_hasLatest = Symbol("ZipWithLatestFromObserver_hasLatest");
        const ZipWithLatestFromObserver_otherLatest = Symbol("ZipWithLatestFromObserver_otherLatest");
        const ZipWithLatestFromObserver_queue = Symbol("ZipWithLatestFromObserver_queue");
        const ZipWithLatestFromObserver_selector = Symbol("ZipWithLatestFromObserver_selector");
        const notifyDelegate = (observer) => {
            if (getLength(observer[ZipWithLatestFromObserver_queue]) > 0 &&
                observer[ZipWithLatestFromObserver_hasLatest]) {
                observer[ZipWithLatestFromObserver_hasLatest] = false;
                const next = observer[ZipWithLatestFromObserver_queue].shift();
                const result = observer[ZipWithLatestFromObserver_selector](next, observer[ZipWithLatestFromObserver_otherLatest]);
                pipe(observer[DelegatingLike_delegate], Sink_notify(result));
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function ZipWithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            init(delegatingMixin(), instance, delegate);
            instance[ZipWithLatestFromObserver_queue] = [];
            instance[ZipWithLatestFromObserver_selector] = selector;
            const disposeDelegate = () => {
                if (Disposable_isDisposed(instance) &&
                    Disposable_isDisposed(otherSubscription)) {
                    pipe(delegate, Disposable_dispose());
                }
            };
            const otherSubscription = pipe(other, Observable_forEach(otherLatest => {
                instance[ZipWithLatestFromObserver_hasLatest] = true;
                instance[ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);
                if (Disposable_isDisposed(instance) &&
                    isEmpty(instance[ZipWithLatestFromObserver_queue])) {
                    pipe(instance[DelegatingLike_delegate], Disposable_dispose());
                }
            }), Observable_subscribe(Observer_getScheduler(delegate)), Disposable_onComplete(disposeDelegate), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(disposeDelegate));
            return instance;
        }, props({
            [ZipWithLatestFromObserver_hasLatest]: false,
            [ZipWithLatestFromObserver_otherLatest]: none,
            [ZipWithLatestFromObserver_queue]: none,
            [ZipWithLatestFromObserver_selector]: none,
        }), {
            [SinkLike_notify](next) {
                this[ZipWithLatestFromObserver_queue].push(next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), Observable_lift(Observable_isEnumerable(other), Observable_isRunnable(other)));
})();
export default Observable_zipWithLatestFrom;
