/// <reference types="./HigherOrderObservable.switchAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef$create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observable$forEach from '../Observable/Observable.forEach.mjs';
import Observable$subscribe from '../Observable/Observable.subscribe.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notifySink from '../Sink/Sink.notifySink.mjs';

const HigherOrderObservable$switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = Observer$mixin();
        function onDispose() {
            if (Disposable$isDisposed(this.currentRef[MutableRefLike_current])) {
                pipe(this.delegate, Disposable$dispose());
            }
        }
        return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(Disposable$mixin, instance);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(DisposableRef$create(Disposable$disposed), Disposable$addTo(delegate));
            pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, Observable$forEach(Sink$notifySink(this.delegate)), Observable$subscribe(Observer$getScheduler(this)), Disposable$onComplete(() => {
                    if (Disposable$isDisposed(this)) {
                        pipe(this.delegate, Disposable$dispose());
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};

export { HigherOrderObservable$switchAll as default };
