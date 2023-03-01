/// <reference types="./Observable.takeWhile.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");
        const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeWhileSinkMixin(instance, delegate, predicate, inclusive) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[TakeWhileSinkMixin_predicate] = predicate;
            instance[TakeWhileSinkMixin_inclusive] = inclusive;
            return instance;
        }, props({
            [TakeWhileSinkMixin_predicate]: none,
            [TakeWhileSinkMixin_inclusive]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const satisfiesPredicate = this[TakeWhileSinkMixin_predicate](next);
                if (satisfiesPredicate || this[TakeWhileSinkMixin_inclusive]) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
                if (!satisfiesPredicate) {
                    pipe(this, Disposable_dispose());
                }
            },
        }));
    })();
    return pipe(createTakeWhileObserver, StatefulContainer_takeWhile(Observable_liftEnumerableOperator));
})();
export default Observable_takeWhile;
