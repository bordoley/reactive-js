/// <reference types="./Observable.timeout.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container_throws from '../../../containers/__internal__/Container/Container.throws.mjs';
import { pipe, none, returns, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import DisposableRef_mixin from '../../../util/__internal__/DisposableRef/DisposableRef.mixin.mjs';
import MutableRef_get from '../../../util/__internal__/MutableRef/MutableRef.get.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Observable_concat from './Observable.concat.mjs';
import Observable_fromArray from './Observable.fromArray.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_map from './Observable.map.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("Observable.timeout.error");
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedObserverMixin = Observer_mixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, Observable_subscribe(Observer_getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance.delegate = delegate;
        instance.duration = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        delegate: none,
        duration: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, MutableRef_get, Disposable_dispose());
            this.delegate[SinkLike_notify](next);
        },
    }));
    const returnTimeoutError = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Container_throws({
                fromArray: Observable_fromArray,
                map: Observable_map,
            }, { delay: duration, delayStart: true })(returnTimeoutError)
            : Observable_concat(duration, Container_throws({
                fromArray: Observable_fromArray,
                map: Observable_map,
            })(returnTimeoutError));
        return pipe(createTimeoutObserver, partial(durationObs), Observable_lift(false, isNumber(duration) || Observable_isRunnable(duration)));
    };
})();

export { Observable_timeout as default };
