/// <reference types="./Observable.timeout.d.ts" />
import { DelegatingLike_delegate, createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container_throws from '../../../containers/Container/__internal__/Container.throws.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, none, returns, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/Disposable/__internal__/Disposable.disposed.mjs';
import DisposableRef_mixin from '../../../util/__internal__/DisposableRef/__internal__/DisposableRef.mixin.mjs';
import MutableRef_get from '../../../util/__internal__/MutableRef/__internal__/MutableRef.get.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Observer_mixin from '../../Observer/__internal__/Observer.mixin.mjs';
import Observable_concat from './Observable.concat.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_map from './Observable.map.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("Observable.timeout.error");
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedObserverMixin = Observer_mixin();
    const TimeoutObserver_duration = Symbol("TimeoutObserver_duration");
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer[TimeoutObserver_duration], Observable_subscribe(Observer_getScheduler(observer[DelegatingLike_delegate])));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_delegatingMixin(), typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance[TimeoutObserver_duration] = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        [TimeoutObserver_duration]: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, MutableRef_get, Disposable_dispose());
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
    }));
    const raise = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Container_throws({
                fromReadonlyArray: ReadonlyArray_toRunnableObservable,
                map: Observable_map,
            }, { delay: duration, delayStart: true, raise })
            : Observable_concat(duration, Container_throws({
                fromReadonlyArray: ReadonlyArray_toRunnableObservable,
                map: Observable_map,
            }, { raise }));
        return pipe(createTimeoutObserver, partial(durationObs), Observable_lift(false, isNumber(duration) || Observable_isRunnable(duration)));
    };
})();

export { Observable_timeout as default };
