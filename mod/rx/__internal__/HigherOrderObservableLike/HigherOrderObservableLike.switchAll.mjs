/// <reference types="./HigherOrderObservableLike.switchAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { createDisposableRef } from '../../../__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../../../__internal__/util/MutableRefLike.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notifySink } from '../../SinkLike.mjs';
import ObservableLike__forEach from '../ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__subscribe from '../ObservableLike/ObservableLike.subscribe.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';

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
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(createDisposableRef(DisposableLike__disposed), DisposableLike__addTo(delegate));
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, ObservableLike__forEach(notifySink(this.delegate)), ObservableLike__subscribe(getScheduler(this)), DisposableLike__onComplete(() => {
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
