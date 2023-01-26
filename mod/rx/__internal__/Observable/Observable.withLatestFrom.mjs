/// <reference types="./Observable.withLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$withLatestFrom = /*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => {
        const typedObserverMixin = Observer$mixin();
        return createInstanceFactory(mix(include(Disposable$delegatingMixin, typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable$delegatingMixin, instance, delegate);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            instance.delegate = delegate;
            instance.selector = selector;
            pipe(other, Observable$forEach(next => {
                instance.hasLatest = true;
                instance.otherLatest = next;
            }), Observable$subscribe(Observer$getScheduler(delegate)), Disposable$addTo(instance), Disposable$onComplete(() => {
                if (!instance.hasLatest) {
                    pipe(instance, Disposable$dispose());
                }
            }));
            return instance;
        }, props({
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            selector: none,
        }), {
            [SinkLike_notify](next) {
                if (!Disposable$isDisposed(this) && this.hasLatest) {
                    const result = this.selector(next, this.otherLatest);
                    pipe(this.delegate, Sink$notify(result));
                }
            },
        }));
    })();
    return (other, selector) => pipe(createWithLatestObserver, partial(other, selector), Observable$lift(Observable$isEnumerable(other), Observable$isRunnable(other)));
})();

export { Observable$withLatestFrom as default };
