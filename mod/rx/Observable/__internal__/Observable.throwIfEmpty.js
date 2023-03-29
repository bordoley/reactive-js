/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ThrowIfEmptyObserver_isEmpty } from "../../../__internal__/symbols.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_throwIfEmpty = /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(Disposable_mixin, instance);
            init(delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]);
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                let err = none;
                if (instance[ThrowIfEmptyObserver_isEmpty]) {
                    try {
                        err = error(factory());
                    }
                    catch (e) {
                        err = error(e);
                    }
                }
                delegate[DisposableLike_dispose](err);
            }));
            return instance;
        }, props({
            [ThrowIfEmptyObserver_isEmpty]: true,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[ThrowIfEmptyObserver_isEmpty] = false;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return (factory) => pipe(createThrowIfEmptyObserver, partial(factory), Observable_liftEnumerableOperator);
})();
export default Observable_throwIfEmpty;
