/// <reference types="./Observable.withCurrentTime.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SchedulerLike_now, WithCurrentTimeObserver_selector, } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
const Observable_withCurrentTime = /*@__PURE__*/ (() => {
    const createWithCurrentTimeObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
            instance[WithCurrentTimeObserver_selector] = selector;
            return instance;
        }, props({
            [WithCurrentTimeObserver_selector]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const currentTime = this[DispatcherLike_scheduler][SchedulerLike_now];
                const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
                this[DelegatingLike_delegate][ObserverLike_notify](mapped);
            },
        }));
    })();
    return ((selector) => pipe(createWithCurrentTimeObserver, partial(selector), Enumerable_lift));
})();
export default Observable_withCurrentTime;
