/// <reference types="./Observable.timeout.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container$throws from '../../../containers/__internal__/Container/Container.throws.mjs';
import { pipe, none, returns, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import DisposableRef$mixin from '../../../util/__internal__/DisposableRef/DisposableRef.mixin.mjs';
import MutableRef$get from '../../../util/__internal__/MutableRef/MutableRef.get.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Observable$concat from './Observable.concat.mjs';
import Observable$fromArray from './Observable.fromArray.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$map from './Observable.map.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("Observable.timeout.error");
    const typedDisposableRefMixin = DisposableRef$mixin();
    const typedObserverMixin = Observer$mixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, Observable$subscribe(Observer$getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable$delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable$disposed);
        instance.delegate = delegate;
        instance.duration = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        delegate: none,
        duration: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, MutableRef$get, Disposable$dispose());
            pipe(this.delegate, Sink$notify(next));
        },
    }));
    const returnTimeoutError = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Container$throws({
                fromArray: Observable$fromArray,
                map: Observable$map,
            }, { delay: duration, delayStart: true })(returnTimeoutError)
            : Observable$concat(duration, Container$throws({
                fromArray: Observable$fromArray,
                map: Observable$map,
            })(returnTimeoutError));
        return pipe(createTimeoutObserver, partial(durationObs), Observable$lift(false, isNumber(duration) || Observable$isRunnable(duration)));
    };
})();

export { Observable$timeout as default };
