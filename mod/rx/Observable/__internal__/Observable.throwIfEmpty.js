/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ThrowIfEmptyObserver_isEmpty } from "../../../__internal__/symbols.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_throwIfEmpty = /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        return createInstanceFactory(mix(include(delegatingMixin(), Observer_mixin()), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
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
    return (factory) => pipe(createThrowIfEmptyObserver, partial(factory), Enumerable_lift);
})();
export default Observable_throwIfEmpty;
