/// <reference types="./Observer.createWithLatestObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, WithLatestLike_hasLatest, WithLatestLike_otherLatest, WithLatestLike_selector, } from "../../__internal__/types.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createWithLatestObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Disposable_delegatingMixin, Delegating_mixin()), function WithLatestLike(instance, delegate, other, selector) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Observer_mixin(), instance, delegate, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[WithLatestLike_selector] = selector;
    pipe(other, Observable_forEach((next) => {
        instance[WithLatestLike_hasLatest] = true;
        instance[WithLatestLike_otherLatest] = next;
    }), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(instance), Disposable_onComplete(() => {
        if (!instance[WithLatestLike_hasLatest]) {
            instance[DisposableLike_dispose]();
        }
    }));
    return instance;
}, props({
    [WithLatestLike_hasLatest]: false,
    [WithLatestLike_otherLatest]: none,
    [WithLatestLike_selector]: none,
}), {
    [SinkLike_notify](next) {
        Observer_assertState(this);
        if (!this[DisposableLike_isDisposed] &&
            this[WithLatestLike_hasLatest]) {
            const result = this[WithLatestLike_selector](next, this[WithLatestLike_otherLatest]);
            this[DelegatingLike_delegate][SinkLike_notify](result);
        }
    },
})))();
export default Observer_createWithLatestObserver;
