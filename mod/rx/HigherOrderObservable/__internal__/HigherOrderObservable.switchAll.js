/// <reference types="./HigherOrderObservable.switchAll.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";
const HigherOrderObservable_currentRef = Symbol("HigherOrderObservable_currentRef");
const HigherOrderObservable_switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        function onDispose() {
            if (this[HigherOrderObservable_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
                this[DelegatingLike_delegate][DisposableLike_dispose]();
            }
        }
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function SwitchAllObserver(instance, delegate) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(delegatingMixin(), instance, delegate);
            instance[HigherOrderObservable_currentRef] = pipe(SerialDisposable_create(Disposable_disposed), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(onDispose));
            return instance;
        }, props({
            [HigherOrderObservable_currentRef]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[HigherOrderObservable_currentRef][SerialDisposableLike_current] = pipe(next, Observable_forEach(Observer_notifyObserver(this[DelegatingLike_delegate])), Observable_subscribe(this[ObserverLike_scheduler]), Disposable_onComplete(() => {
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
