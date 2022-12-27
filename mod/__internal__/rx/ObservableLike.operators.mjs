/// <reference types="./ObservableLike.operators.d.ts" />
import { map, every } from '../../containers/ReadonlyArrayLike.mjs';
import distinctUntilChanged$1 from '../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import forEach$1 from '../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import scan$1 from '../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import takeFirst$1 from '../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import { compose, isTrue, pipe, getLength, isEmpty, none, partial } from '../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_scheduler, SinkLike_notify } from '../../rx.mjs';
import { getScheduler } from '../../rx/ObserverLike.mjs';
import { sourceFrom, notify } from '../../rx/SinkLike.mjs';
import { create, publishTo } from '../../rx/SubjectLike.mjs';
import takeFirstMixin from '../../rx/__internal__/SinkLike/SinkLike.takeFirstMixin.mjs';
import addTo from '../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import addToIgnoringChildErrors from '../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import bindTo from '../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import isDisposed from '../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import disposableMixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import onComplete from '../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../mixins.mjs';
import { createEnumerableObservable, createRunnableObservable, createObservable } from './ObservableLike.create.mjs';
import { liftEnumerableObservableT, liftEnumerableObservable, liftRunnableObservable, liftObservable } from './ObservableLike.lift.mjs';
import { observerMixin, createDelegatingObserver, createObserver } from './ObserverLike.internal.mjs';
import { createOnSink } from './ReactiveContainerLike.createOnSink.mjs';
import { distinctUntilChangedSinkMixin, forEachSinkMixin, scanSinkMixin } from './SinkLike.mixins.mjs';

const allAreEnumerable = compose(map((obs) => obs[ObservableLike_isEnumerable]), every(isTrue));
const allAreRunnable = compose(map((obs) => obs[ObservableLike_isRunnable]), every(isTrue));
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createDistinctUntilChangedObserver = (() => {
        const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
            return instance;
        }));
    })();
    return pipe(createDistinctUntilChangedObserver, distinctUntilChanged$1(liftEnumerableObservableT));
})();
const forEach = /*@__PURE__*/ (() => {
    const createForEachObserver = (() => {
        const typedForEachSinkMixin = forEachSinkMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedForEachSinkMixin, instance, delegate, effect);
            return instance;
        }));
    })();
    return pipe(createForEachObserver, forEach$1(liftEnumerableObservableT));
})();
const isEnumerable = (obs) => obs[ObservableLike_isEnumerable];
const isRunnable = (obs) => obs[ObservableLike_isRunnable];
const mergeImpl = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
            }
        };
        const isEnumerable = allAreEnumerable(observables);
        const isRunnable = allAreRunnable(observables);
        return isEnumerable
            ? createEnumerableObservable(onSink)
            : isRunnable
                ? createRunnableObservable(onSink)
                : createObservable(onSink);
    };
})();
const merge = (...observables) => mergeImpl(observables);
const mergeT = {
    concat: merge,
};
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = create({ replay });
    pipe(observable, forEach(publishTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const onSubscribe = (f) => (obs) => {
    return createOnSink(onSink => isEnumerable(obs)
        ? createEnumerableObservable(onSink)
        : isRunnable(obs)
            ? createRunnableObservable(onSink)
            : createObservable(onSink), obs, f);
};
const scan = /*@__PURE__*/ (() => {
    const createScanObserver = (() => {
        const typedScanSinkMixin = scanSinkMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
            return instance;
        }));
    })();
    return pipe(createScanObserver, scan$1(liftEnumerableObservableT));
})();
const subscribe = scheduler => observable => pipe(scheduler, createObserver, addToIgnoringChildErrors(scheduler), sourceFrom(observable));
const takeFirst = 
/*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const typedTakeFirstSinkMixin = takeFirstMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
            return instance;
        }));
    })();
    return pipe(createTakeFirstObserver, takeFirst$1(liftEnumerableObservableT));
})();
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
        return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function ZipWithLatestFromObserer(instance, delegate, other, selector) {
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
    return (other, selector) => {
        const lift = isEnumerable(other)
            ? liftEnumerableObservable
            : isRunnable(other)
                ? liftRunnableObservable
                : liftObservable;
        return pipe(createZipWithLatestFromObserver, partial(other, selector), lift);
    };
})();

export { allAreEnumerable, allAreRunnable, distinctUntilChanged, forEach, isEnumerable, isRunnable, merge, mergeImpl, mergeT, multicast, onSubscribe, scan, subscribe, takeFirst, zipWithLatestFrom };
