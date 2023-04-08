/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ThrowIfEmptyObserver_isEmpty } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.internal.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_throwIfEmpty = /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        return createInstanceFactory(mix(include(Delegating_mixin(), Observer_mixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                let err = none;
                if (instance[__ThrowIfEmptyObserver_isEmpty]) {
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
            [__ThrowIfEmptyObserver_isEmpty]: true,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[__ThrowIfEmptyObserver_isEmpty] = false;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return (factory) => pipe(createThrowIfEmptyObserver, partial(factory), Enumerable_lift);
})();
export default Observable_throwIfEmpty;
