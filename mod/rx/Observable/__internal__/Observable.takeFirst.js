/// <reference types="./Observable.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { TakeFirstObserver_count, TakeFirstObserver_takeCount, } from "../../../__internal__/symbols.js";
import { partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_capacity, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeFirstObserver(instance, delegate, takeCount) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity]);
            instance[TakeFirstObserver_takeCount] = takeCount;
            if (takeCount === 0) {
                instance[DisposableLike_dispose]();
            }
            return instance;
        }, props({
            [TakeFirstObserver_count]: 0,
            [TakeFirstObserver_takeCount]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[TakeFirstObserver_count]++;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
                if (this[TakeFirstObserver_count] >= this[TakeFirstObserver_takeCount]) {
                    this[DisposableLike_dispose]();
                }
            },
        }));
    })();
    return ((options = {}) => {
        var _a;
        const count = clampPositiveInteger((_a = options.count) !== null && _a !== void 0 ? _a : 1);
        return pipe(createTakeFirstObserver, partial(count), Observable_liftEnumerableOperator);
    });
})();
export default Observable_takeFirst;
