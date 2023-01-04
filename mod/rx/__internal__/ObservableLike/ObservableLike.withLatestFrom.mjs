/// <reference types="./ObservableLike.withLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addTo, onComplete, dispose, isDisposed } from '../../../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notify } from '../../SinkLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__withLatestFrom = /*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.selector = selector;
            pipe(other, ObservableLike__forEach(next => {
                instance.hasLatest = true;
                instance.otherLatest = next;
            }), ObservableLike__subscribe(getScheduler(delegate)), addTo(instance), onComplete(() => {
                if (!instance.hasLatest) {
                    pipe(instance, dispose());
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
                if (!isDisposed(this) && this.hasLatest) {
                    const result = this.selector(next, this.otherLatest);
                    pipe(this.delegate, notify(result));
                }
            },
        }));
    })();
    return (other, selector) => pipe(createWithLatestObserver, partial(other, selector), ObservableLike__lift(ObservableLike__isEnumerable(other), ObservableLike__isRunnable(other)));
})();

export { ObservableLike__withLatestFrom as default };
