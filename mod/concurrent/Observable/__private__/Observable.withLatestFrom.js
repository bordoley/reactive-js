/// <reference types="./Observable.withLatestFrom.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe, } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observer_createWithLatestFromObserver = /*@__PURE__*/ (() => {
    const WithLatestFromObserver_hasLatest = Symbol("WithLatestFromObserver_hasLatest");
    const WithLatestFromObserver_otherLatest = Symbol("WithLatestFromObserver_otherLatest");
    const WithLatestFromObserver_selector = Symbol("WithLatestFromObserver_selector");
    return createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function WithLatestFromObserver(instance, delegate, other, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithLatestFromObserver_selector] = selector;
        pipe(other, Observable_forEach((next) => {
            instance[WithLatestFromObserver_hasLatest] = true;
            instance[WithLatestFromObserver_otherLatest] = next;
        }), Observable_subscribeWithConfig(delegate, delegate), Disposable.addTo(instance), Disposable.onComplete(() => {
            if (!instance[WithLatestFromObserver_hasLatest]) {
                instance[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [WithLatestFromObserver_hasLatest]: false,
        [WithLatestFromObserver_otherLatest]: none,
        [WithLatestFromObserver_selector]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            if (!this[DisposableLike_isDisposed] &&
                this[WithLatestFromObserver_hasLatest]) {
                const result = this[WithLatestFromObserver_selector](next, this[WithLatestFromObserver_otherLatest]);
                this[DelegatingDisposableLike_delegate][SinkLike_notify](result);
            }
        },
    }));
})();
const Observable_withLatestFrom = ((other, selector) => pipe(Observer_createWithLatestFromObserver, partial(other, selector), Observable_lift(other)));
export default Observable_withLatestFrom;
