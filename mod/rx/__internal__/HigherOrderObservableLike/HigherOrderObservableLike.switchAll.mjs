/// <reference types="./HigherOrderObservableLike.switchAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import DisposableRefLike__create from '../../../util/__internal__/DisposableRefLike/DisposableRefLike.create.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import ObservableLike__forEach from '../ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__subscribe from '../ObservableLike/ObservableLike.subscribe.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__notifySink from '../SinkLike/SinkLike.notifySink.mjs';

const HigherOrderObservableLike__switchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        function onDispose() {
            if (DisposableLike__isDisposed(this.currentRef[MutableRefLike_current])) {
                pipe(this.delegate, DisposableLike__dispose());
            }
        }
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, ObserverLike__getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(DisposableRefLike__create(DisposableLike__disposed), DisposableLike__addTo(delegate));
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, ObservableLike__forEach(SinkLike__notifySink(this.delegate)), ObservableLike__subscribe(ObserverLike__getScheduler(this)), DisposableLike__onComplete(() => {
                    if (DisposableLike__isDisposed(this)) {
                        pipe(this.delegate, DisposableLike__dispose());
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};

export { HigherOrderObservableLike__switchAll as default };
