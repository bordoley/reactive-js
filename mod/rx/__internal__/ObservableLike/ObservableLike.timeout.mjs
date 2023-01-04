/// <reference types="./ObservableLike.timeout.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { disposableRefMixin } from '../../../__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current, getCurrentRef } from '../../../__internal__/util/MutableRefLike.mjs';
import { throws } from '../../../containers/ContainerLike.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, none, returns, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { disposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notify } from '../../SinkLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import ObservableLike__concat from './ObservableLike.concat.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__mapT from './ObservableLike.mapT.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("ObservableLike.timeout.error");
    const typedDisposableRefMixin = disposableRefMixin();
    const typedObserverMixin = ObserverLike__mixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, ObservableLike__subscribe(getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, disposed);
        instance.delegate = delegate;
        instance.duration = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        delegate: none,
        duration: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, getCurrentRef, dispose());
            pipe(this.delegate, notify(next));
        },
    }));
    const returnTimeoutError = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? throws({
                fromArray: ReadonlyArrayLike__toRunnableObservable,
                ...ObservableLike__mapT,
            }, { delay: duration, delayStart: true })(returnTimeoutError)
            : ObservableLike__concat(duration, throws({
                fromArray: ReadonlyArrayLike__toRunnableObservable,
                ...ObservableLike__mapT,
            })(returnTimeoutError));
        return pipe(createTimeoutObserver, partial(durationObs), ObservableLike__lift(false, isNumber(duration) || ObservableLike__isRunnable(duration)));
    };
})();

export { ObservableLike__timeout as default };
