/// <reference types="./Observable.takeWhile.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __TakeWhileObserver_inclusive, __TakeWhileObserver_predicate, } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_takeWhile = /*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[__TakeWhileObserver_predicate] = predicate;
            instance[__TakeWhileObserver_inclusive] = inclusive;
            return instance;
        }, props({
            [__TakeWhileObserver_predicate]: none,
            [__TakeWhileObserver_inclusive]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const satisfiesPredicate = this[__TakeWhileObserver_predicate](next);
                if (satisfiesPredicate || this[__TakeWhileObserver_inclusive]) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
                if (!satisfiesPredicate) {
                    this[DisposableLike_dispose]();
                }
            },
        }));
    })();
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return pipe(createTakeWhileObserver, partial(predicate, inclusive), Enumerable_lift);
    };
})();
export default Observable_takeWhile;
