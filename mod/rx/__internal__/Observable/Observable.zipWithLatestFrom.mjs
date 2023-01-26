/// <reference types="./Observable.zipWithLatestFrom.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getLength, pipe, isEmpty, none, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$zipWithLatestFrom = /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = Observer$mixin();
        const notifyDelegate = (observer) => {
            if (getLength(observer.queue) > 0 && observer.hasLatest) {
                observer.hasLatest = false;
                const next = observer.queue.shift();
                const result = observer.selector(next, observer.otherLatest);
                pipe(observer.delegate, Sink$notify(result));
            }
        };
        return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function ZipWithLatestFromObserer(instance, delegate, other, selector) {
            init(Disposable$mixin, instance);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            instance.delegate = delegate;
            instance.queue = [];
            instance.selector = selector;
            const disposeDelegate = () => {
                if (Disposable$isDisposed(instance) &&
                    Disposable$isDisposed(otherSubscription)) {
                    pipe(delegate, Disposable$dispose());
                }
            };
            const otherSubscription = pipe(other, Observable$forEach(otherLatest => {
                instance.hasLatest = true;
                instance.otherLatest = otherLatest;
                notifyDelegate(instance);
                if (Disposable$isDisposed(instance) && isEmpty(instance.queue)) {
                    pipe(instance.delegate, Disposable$dispose());
                }
            }), Observable$subscribe(Observer$getScheduler(delegate)), Disposable$onComplete(disposeDelegate), Disposable$addTo(delegate));
            pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(disposeDelegate));
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
    return (other, selector) => pipe(createZipWithLatestFromObserver, partial(other, selector), Observable$lift(Observable$isEnumerable(other), Observable$isRunnable(other)));
})();

export { Observable$zipWithLatestFrom as default };
