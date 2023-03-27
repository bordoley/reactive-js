/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SkipFirstObserver_count, SkipFirstObserver_skipCount, } from "../../../__internal__/symbols.js";
import { partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_skipFirst = /*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function SkipFirstObserver(instance, delegate, skipCount) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
            instance[SkipFirstObserver_skipCount] = skipCount;
            return instance;
        }, props({
            [SkipFirstObserver_skipCount]: 0,
            [SkipFirstObserver_count]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[SkipFirstObserver_count]++;
                if (this[SkipFirstObserver_count] > this[SkipFirstObserver_skipCount]) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return ((options = {}) => {
        var _a;
        const count = clampPositiveInteger((_a = options === null || options === void 0 ? void 0 : options.count) !== null && _a !== void 0 ? _a : 1);
        const op = pipe(createSkipFirstObserver, partial(count), Observable_liftEnumerableOperator);
        return obs => (count > 0 ? op(obs) : obs);
    });
})();
export default Observable_skipFirst;
