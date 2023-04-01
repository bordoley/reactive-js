/// <reference types="./Observable.takeWhile.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { TakeWhileObserver_inclusive, TakeWhileObserver_predicate, } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeWhile = /*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(Disposable_delegatingMixin(), instance, delegate);
            initObserverMixinFromDelegate(instance, delegate);
            instance[TakeWhileObserver_predicate] = predicate;
            instance[TakeWhileObserver_inclusive] = inclusive;
            return instance;
        }, props({
            [TakeWhileObserver_predicate]: none,
            [TakeWhileObserver_inclusive]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
                if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
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
        return pipe(createTakeWhileObserver, partial(predicate, inclusive), Observable_liftEnumerableOperator);
    };
})();
export default Observable_takeWhile;
