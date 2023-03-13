/// <reference types="./Observable.takeWhile.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_maxBufferSize, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const TakeWhileObserverMixin_predicate = Symbol("TakeWhileObserverMixin_predicate");
        const TakeWhileObserverMixin_inclusive = Symbol("TakeWhileObserverMixin_inclusive");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeWhileObserverMixin(instance, delegate, predicate, inclusive) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
            instance[TakeWhileObserverMixin_predicate] = predicate;
            instance[TakeWhileObserverMixin_inclusive] = inclusive;
            return instance;
        }, props({
            [TakeWhileObserverMixin_predicate]: none,
            [TakeWhileObserverMixin_inclusive]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const satisfiesPredicate = this[TakeWhileObserverMixin_predicate](next);
                if (satisfiesPredicate ||
                    this[TakeWhileObserverMixin_inclusive]) {
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
