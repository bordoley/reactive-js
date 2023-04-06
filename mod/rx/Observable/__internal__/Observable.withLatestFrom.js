/// <reference types="./Observable.withLatestFrom.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { WithLatestFromObserver_hasLatest, WithLatestFromObserver_otherLatest, WithLatestFromObserver_selector, } from "../../../__internal__/symbols.js";
import { none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_withLatestFrom = 
/*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
            instance[WithLatestFromObserver_selector] = selector;
            pipe(other, Observable_forEach(next => {
                instance[WithLatestFromObserver_hasLatest] = true;
                instance[WithLatestFromObserver_otherLatest] = next;
            }), Observable_subscribeWithConfig(delegate), Disposable_addTo(instance), Disposable_onComplete(() => {
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
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (!this[DisposableLike_isDisposed] &&
                    this[WithLatestFromObserver_hasLatest]) {
                    const result = this[WithLatestFromObserver_selector](next, this[WithLatestFromObserver_otherLatest]);
                    this[DelegatingLike_delegate][ObserverLike_notify](result);
                }
            },
        }));
    })();
    return (other, selector) => pipe(createWithLatestObserver, partial(other, selector), Observable_lift(other));
})();
export default Observable_withLatestFrom;
