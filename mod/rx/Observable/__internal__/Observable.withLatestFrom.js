/// <reference types="./Observable.withLatestFrom.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __WithLatestFromObserver_hasLatest, __WithLatestFromObserver_otherLatest, __WithLatestFromObserver_selector, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_withLatestFrom = /*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function WithLatestFromObserver(instance, delegate, other, selector) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__WithLatestFromObserver_selector] = selector;
        pipe(other, Observable_forEach(next => {
            instance[__WithLatestFromObserver_hasLatest] = true;
            instance[__WithLatestFromObserver_otherLatest] = next;
        }), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(instance), Disposable_onComplete(() => {
            if (!instance[__WithLatestFromObserver_hasLatest]) {
                instance[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [__WithLatestFromObserver_hasLatest]: false,
        [__WithLatestFromObserver_otherLatest]: none,
        [__WithLatestFromObserver_selector]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            if (!this[DisposableLike_isDisposed] &&
                this[__WithLatestFromObserver_hasLatest]) {
                const result = this[__WithLatestFromObserver_selector](next, this[__WithLatestFromObserver_otherLatest]);
                this[DelegatingLike_delegate][ObserverLike_notify](result);
            }
        },
    })))();
    return (other, selector) => pipe(createWithLatestObserver, partial(other, selector), Observable_lift(other));
})();
export default Observable_withLatestFrom;
