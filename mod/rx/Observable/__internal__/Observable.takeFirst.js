/// <reference types="./Observable.takeFirst.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const TakeFirstObserverMixin_takeCount = Symbol("TakeFirstObserverMixin_takeCount");
        const TakeFirstObserverMixin_count = Symbol("TakeFirstObserverMixin_count");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeFirstObserverMixin(instance, delegate, takeCount) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[TakeFirstObserverMixin_takeCount] = takeCount;
            if (takeCount === 0) {
                pipe(instance, Disposable_dispose());
            }
            return instance;
        }, props({
            [TakeFirstObserverMixin_count]: 0,
            [TakeFirstObserverMixin_takeCount]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[TakeFirstObserverMixin_count]++;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
                if (this[TakeFirstObserverMixin_count] >=
                    this[TakeFirstObserverMixin_takeCount]) {
                    pipe(this, Disposable_dispose());
                }
            },
        }));
    })();
    return pipe(createTakeFirstObserver, StatefulContainer_takeFirst(Observable_liftEnumerableOperator));
})();
export default Observable_takeFirst;
