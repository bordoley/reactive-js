/// <reference types="./Observable.withLatestFrom.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../concurrent.js";
import { bind, none, partial, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createWithLatestFromObserver = /*@__PURE__*/ (() => {
    const WithLatestFromObserver_hasLatest = Symbol("WithLatestFromObserver_hasLatest");
    const WithLatestFromObserver_otherLatest = Symbol("WithLatestFromObserver_otherLatest");
    const WithLatestFromObserver_selector = Symbol("WithLatestFromObserver_selector");
    function onWithLatestFromObserverOtherSubscriptionComplete() {
        if (!this[WithLatestFromObserver_hasLatest]) {
            this[DisposableLike_dispose]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromObserver_hasLatest] = true;
        this[WithLatestFromObserver_otherLatest] = next;
    }
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin()), function WithLatestFromObserver(instance, delegate, other, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithLatestFromObserver_selector] = selector;
        pipe(other, Observable_forEach(bind(onOtherNotify, instance)), Observable_subscribeWithConfig(delegate, delegate), Disposable.addTo(instance), DisposableContainer.onComplete(bind(onWithLatestFromObserverOtherSubscriptionComplete, instance)));
        return instance;
    }, props({
        [WithLatestFromObserver_hasLatest]: false,
        [WithLatestFromObserver_otherLatest]: none,
        [WithLatestFromObserver_selector]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            if (!this[DisposableLike_isDisposed] &&
                this[WithLatestFromObserver_hasLatest]) {
                const result = this[WithLatestFromObserver_selector](next, this[WithLatestFromObserver_otherLatest]);
                this[DelegatingDisposableLike_delegate][ObserverLike_notify](result);
            }
        }),
    });
})();
const Observable_withLatestFrom = ((other, selector) => pipe(createWithLatestFromObserver, partial(other, selector), Observable_lift({
    [ObservableLift_isStateless]: false,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: other[ObservableLike_isPure],
    [ObservableLike_isRunnable]: other[ObservableLike_isRunnable],
})));
export default Observable_withLatestFrom;
