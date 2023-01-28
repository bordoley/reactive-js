/// <reference types="./Observable.withLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_withLatestFrom = /*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        return createInstanceFactory(mix(include(Disposable_delegatingMixin, typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(Disposable_delegatingMixin, instance, delegate);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            instance.delegate = delegate;
            instance.selector = selector;
            pipe(other, Observable_forEach(next => {
                instance.hasLatest = true;
                instance.otherLatest = next;
            }), Observable_subscribe(Observer_getScheduler(delegate)), Disposable_addTo(instance), Disposable_onComplete(() => {
                if (!instance.hasLatest) {
                    pipe(instance, Disposable_dispose());
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
                if (!this[DisposableLike_isDisposed] && this.hasLatest) {
                    const result = this.selector(next, this.otherLatest);
                    this.delegate[SinkLike_notify](result);
                }
            },
        }));
    })();
    return (other, selector) => pipe(createWithLatestObserver, partial(other, selector), Observable_lift(Observable_isEnumerable(other), Observable_isRunnable(other)));
})();

export { Observable_withLatestFrom as default };
