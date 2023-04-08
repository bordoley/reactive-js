/// <reference types="./HigherOrderObservable.switchAll.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { HigherOrderObservable_currentRef, ObserverMixin_scheduler, } from "../../../__internal__/symbols.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        function onDispose() {
            if (this[HigherOrderObservable_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
                this[DelegatingLike_delegate][DisposableLike_dispose]();
            }
        }
        return createInstanceFactory(mix(include(Observer_mixin(), delegatingMixin()), function SwitchAllObserver(instance, delegate) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[HigherOrderObservable_currentRef] = pipe(SerialDisposable_create(Disposable_disposed), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(bind(onDispose, instance)));
            return instance;
        }, props({
            [HigherOrderObservable_currentRef]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[HigherOrderObservable_currentRef][SerialDisposableLike_current] = pipe(next, Observable_forEach(bindMethod(this[DelegatingLike_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(this[ObserverMixin_scheduler], this), Disposable_onComplete(() => {
                    if (this[DisposableLike_isDisposed]) {
                        this[DelegatingLike_delegate][DisposableLike_dispose]();
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};
export default HigherOrderObservable_switchAll;
