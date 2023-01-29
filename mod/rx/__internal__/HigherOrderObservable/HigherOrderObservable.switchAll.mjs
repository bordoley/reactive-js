/// <reference types="./HigherOrderObservable.switchAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef_create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observable_forEach from '../Observable/Observable.forEach.mjs';
import Observable_subscribe from '../Observable/Observable.subscribe.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_notifySink from '../Sink/Sink.notifySink.mjs';

const HigherOrderObservable_currentRef = Symbol("HigherOrderObservable_currentRef");
const HigherOrderObservable_delegate = Symbol("HigherOrderObservable_delegate");
const HigherOrderObservable_switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        function onDispose() {
            if (Disposable_isDisposed(this[HigherOrderObservable_currentRef][MutableRefLike_current])) {
                pipe(this[HigherOrderObservable_delegate], Disposable_dispose());
            }
        }
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            instance[HigherOrderObservable_delegate] = delegate;
            instance[HigherOrderObservable_currentRef] = pipe(DisposableRef_create(Disposable_disposed), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(onDispose));
            return instance;
        }, props({
            [HigherOrderObservable_currentRef]: none,
            [HigherOrderObservable_delegate]: none,
        }), {
            [SinkLike_notify](next) {
                this[HigherOrderObservable_currentRef][MutableRefLike_current] =
                    pipe(next, Observable_forEach(Sink_notifySink(this[HigherOrderObservable_delegate])), Observable_subscribe(Observer_getScheduler(this)), Disposable_onComplete(() => {
                        if (Disposable_isDisposed(this)) {
                            pipe(this[HigherOrderObservable_delegate], Disposable_dispose());
                        }
                    }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};

export { HigherOrderObservable_switchAll as default };
