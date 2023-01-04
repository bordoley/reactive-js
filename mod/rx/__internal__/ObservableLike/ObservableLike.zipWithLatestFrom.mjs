/// <reference types="./ObservableLike.zipWithLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__zipWithLatestFrom = /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        const notifyDelegate = (observer) => {
            if (getLength(observer.queue) > 0 && observer.hasLatest) {
                observer.hasLatest = false;
                const next = observer.queue.shift();
                const result = observer.selector(next, observer.otherLatest);
                pipe(observer.delegate, SinkLike__notify(result));
            }
        };
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ZipWithLatestFromObserer(instance, delegate, other, selector) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, ObserverLike__getScheduler(delegate));
            instance.delegate = delegate;
            instance.queue = [];
            instance.selector = selector;
            const disposeDelegate = () => {
                if (DisposableLike__isDisposed(instance) &&
                    DisposableLike__isDisposed(otherSubscription)) {
                    pipe(delegate, DisposableLike__dispose());
                }
            };
            const otherSubscription = pipe(other, ObservableLike__forEach(otherLatest => {
                instance.hasLatest = true;
                instance.otherLatest = otherLatest;
                notifyDelegate(instance);
                if (DisposableLike__isDisposed(instance) &&
                    isEmpty(instance.queue)) {
                    pipe(instance.delegate, DisposableLike__dispose());
                }
            }), ObservableLike__subscribe(ObserverLike__getScheduler(delegate)), DisposableLike__onComplete(disposeDelegate), DisposableLike__addTo(delegate));
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(disposeDelegate));
            return instance;
        }, props({
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            queue: none,
            selector: none,
        }), {
            [SinkLike_notify](next) {
                this.queue.push(next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), ObservableLike__lift(ObservableLike__isEnumerable(other), ObservableLike__isRunnable(other)));
})();

export { ObservableLike__zipWithLatestFrom as default };
