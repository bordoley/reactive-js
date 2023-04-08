/// <reference types="./Observable.withCurrentTime.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __WithCurrentTimeObserver_selector } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_withCurrentTime = /*@__PURE__*/ (() => {
    const createWithCurrentTimeObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[__WithCurrentTimeObserver_selector] = selector;
            return instance;
        }, props({
            [__WithCurrentTimeObserver_selector]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const currentTime = this[SchedulerLike_now];
                const mapped = this[__WithCurrentTimeObserver_selector](currentTime, next);
                this[DelegatingLike_delegate][ObserverLike_notify](mapped);
            },
        }));
    })();
    return ((selector) => pipe(createWithCurrentTimeObserver, partial(selector), Enumerable_lift));
})();
export default Observable_withCurrentTime;
