/// <reference types="./ObservableLike.timeout.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ContainerLike__throws from '../../../containers/__internal__/ContainerLike/ContainerLike.throws.mjs';
import { pipe, none, returns, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableRefLike__mixin from '../../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin.mjs';
import MutableRefLike__get from '../../../util/__internal__/MutableRefLike/MutableRefLike.get.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import ObservableLike__concat from './ObservableLike.concat.mjs';
import ObservableLike__fromArrayT from './ObservableLike.fromArrayT.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__mapT from './ObservableLike.mapT.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("ObservableLike.timeout.error");
    const typedDisposableRefMixin = DisposableRefLike__mixin();
    const typedObserverMixin = ObserverLike__mixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, ObservableLike__subscribe(ObserverLike__getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, ObserverLike__getScheduler(delegate));
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, DisposableLike__disposed);
        instance.delegate = delegate;
        instance.duration = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        delegate: none,
        duration: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, MutableRefLike__get, DisposableLike__dispose());
            pipe(this.delegate, SinkLike__notify(next));
        },
    }));
    const returnTimeoutError = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? ContainerLike__throws({
                ...ObservableLike__fromArrayT,
                ...ObservableLike__mapT,
            }, { delay: duration, delayStart: true })(returnTimeoutError)
            : ObservableLike__concat(duration, ContainerLike__throws({
                ...ObservableLike__fromArrayT,
                ...ObservableLike__mapT,
            })(returnTimeoutError));
        return pipe(createTimeoutObserver, partial(durationObs), ObservableLike__lift(false, isNumber(duration) || ObservableLike__isRunnable(duration)));
    };
})();

export { ObservableLike__timeout as default };
