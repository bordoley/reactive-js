/// <reference types="./ObservableLike.zipWithLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import observerMixin from '../ObserverLike/ObserverLike.mixin.mjs';
import notify from '../SinkLike/SinkLike.notify.mjs';
import forEach from './ObservableLike.forEach.mjs';
import isEnumerable from './ObservableLike.isEnumerable.mjs';
import isRunnable from './ObservableLike.isRunnable.mjs';
import lift from './ObservableLike.lift.mjs';
import subscribe from './ObservableLike.subscribe.mjs';

const zipWithLatestFrom = /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = observerMixin();
        const notifyDelegate = (observer) => {
            if (getLength(observer.queue) > 0 && observer.hasLatest) {
                observer.hasLatest = false;
                const next = observer.queue.shift();
                const result = observer.selector(next, observer.otherLatest);
                pipe(observer.delegate, notify(result));
            }
        };
        return createInstanceFactory(mix(include(disposableMixin, typedObserverMixin), function ZipWithLatestFromObserer(instance, delegate, other, selector) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.queue = [];
            instance.selector = selector;
            const disposeDelegate = () => {
                if (isDisposed(instance) &&
                    isDisposed(otherSubscription)) {
                    pipe(delegate, dispose());
                }
            };
            const otherSubscription = pipe(other, forEach(otherLatest => {
                instance.hasLatest = true;
                instance.otherLatest = otherLatest;
                notifyDelegate(instance);
                if (isDisposed(instance) &&
                    isEmpty(instance.queue)) {
                    pipe(instance.delegate, dispose());
                }
            }), subscribe(getScheduler(delegate)), onComplete(disposeDelegate), addTo(delegate));
            pipe(instance, addTo(delegate), onComplete(disposeDelegate));
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
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), lift(isEnumerable(other), isRunnable(other)));
})();

export { zipWithLatestFrom as default };
