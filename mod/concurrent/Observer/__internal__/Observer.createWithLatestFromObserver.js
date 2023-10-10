/// <reference types="./Observer.createWithLatestFromObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
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
export default Observer_createWithLatestFromObserver;
