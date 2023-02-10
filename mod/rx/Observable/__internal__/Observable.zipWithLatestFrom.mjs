/// <reference types="./Observable.zipWithLatestFrom.d.ts" />
import { DelegatingLike_delegate, createInstanceFactory, mix, include, delegatingMixin, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Observer_mixin from '../../Observer/__internal__/Observer.mixin.mjs';
import Sink_notify from '../../Sink/__internal__/Sink.notify.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_zipWithLatestFrom = /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const ZipWithLatestFromObserver_hasLatest = Symbol("ZipWithLatestFromObserver_hasLatest");
        const ZipWithLatestFromObserver_otherLatest = Symbol("ZipWithLatestFromObserver_otherLatest");
        const ZipWithLatestFromObserver_queue = Symbol("ZipWithLatestFromObserver_queue");
        const ZipWithLatestFromObserver_selector = Symbol("ZipWithLatestFromObserver_selector");
        const notifyDelegate = (observer) => {
            if (getLength(observer[ZipWithLatestFromObserver_queue]) > 0 &&
                observer[ZipWithLatestFromObserver_hasLatest]) {
                observer[ZipWithLatestFromObserver_hasLatest] = false;
                const next = observer[ZipWithLatestFromObserver_queue].shift();
                const result = observer[ZipWithLatestFromObserver_selector](next, observer[ZipWithLatestFromObserver_otherLatest]);
                pipe(observer[DelegatingLike_delegate], Sink_notify(result));
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function ZipWithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            init(delegatingMixin(), instance, delegate);
            instance[ZipWithLatestFromObserver_queue] = [];
            instance[ZipWithLatestFromObserver_selector] = selector;
            const disposeDelegate = () => {
                if (Disposable_isDisposed(instance) &&
                    Disposable_isDisposed(otherSubscription)) {
                    pipe(delegate, Disposable_dispose());
                }
            };
            const otherSubscription = pipe(other, Observable_forEach(otherLatest => {
                instance[ZipWithLatestFromObserver_hasLatest] = true;
                instance[ZipWithLatestFromObserver_otherLatest] = otherLatest;
                notifyDelegate(instance);
                if (Disposable_isDisposed(instance) &&
                    isEmpty(instance[ZipWithLatestFromObserver_queue])) {
                    pipe(instance[DelegatingLike_delegate], Disposable_dispose());
                }
            }), Observable_subscribe(Observer_getScheduler(delegate)), Disposable_onComplete(disposeDelegate), Disposable_addTo(delegate));
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(disposeDelegate));
            return instance;
        }, props({
            [ZipWithLatestFromObserver_hasLatest]: false,
            [ZipWithLatestFromObserver_otherLatest]: none,
            [ZipWithLatestFromObserver_queue]: none,
            [ZipWithLatestFromObserver_selector]: none,
        }), {
            [SinkLike_notify](next) {
                this[ZipWithLatestFromObserver_queue].push(next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), Observable_lift(Observable_isEnumerable(other), Observable_isRunnable(other)));
})();

export { Observable_zipWithLatestFrom as default };
