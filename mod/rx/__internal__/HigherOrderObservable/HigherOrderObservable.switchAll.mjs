/// <reference types="./HigherOrderObservable.switchAll.d.ts" />
import { DelegatingLike_delegate, createInstanceFactory, mix, include, delegatingMixin, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/Disposable/__internal__/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import DisposableRef_create from '../../../util/DisposableRef/__internal__/DisposableRef.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observable_forEach from '../../Observable/__internal__/Observable.forEach.mjs';
import Observable_subscribe from '../../Observable/__internal__/Observable.subscribe.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Observer_mixin from '../../Observer/__internal__/Observer.mixin.mjs';
import Sink_notifySink from '../../Sink/__internal__/Sink.notifySink.mjs';

const HigherOrderObservable_currentRef = Symbol("HigherOrderObservable_currentRef");
const HigherOrderObservable_switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        function onDispose() {
            if (Disposable_isDisposed(this[HigherOrderObservable_currentRef][MutableRefLike_current])) {
                pipe(this[DelegatingLike_delegate], Disposable_dispose());
            }
        }
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function SwitchAllObserver(instance, delegate) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            init(delegatingMixin(), instance, delegate);
            instance[HigherOrderObservable_currentRef] = pipe(DisposableRef_create(Disposable_disposed), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(onDispose));
            return instance;
        }, props({
            [HigherOrderObservable_currentRef]: none,
        }), {
            [SinkLike_notify](next) {
                this[HigherOrderObservable_currentRef][MutableRefLike_current] =
                    pipe(next, Observable_forEach(Sink_notifySink(this[DelegatingLike_delegate])), Observable_subscribe(Observer_getScheduler(this)), Disposable_onComplete(() => {
                        if (Disposable_isDisposed(this)) {
                            pipe(this[DelegatingLike_delegate], Disposable_dispose());
                        }
                    }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};

export { HigherOrderObservable_switchAll as default };
