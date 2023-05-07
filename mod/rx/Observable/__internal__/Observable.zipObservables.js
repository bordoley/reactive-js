/// <reference types="./Observable.zipObservables.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ZipObserver_enumerators, __ZipObserver_queuedEnumerator, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../../__internal__/util.js";
import { CollectionLike_count, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import ReadonlyArray_everySatisfy from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_someSatisfy from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.someSatisfy.js";
import { bindMethod, compose, isTrue, none, pipe } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../../rx/Enumerable/__internal__/Enumerable.enumerate.js";
import { BufferLike_capacity, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_backpressureStrategy, QueueableLike_enqueue, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const QueuedEnumerator_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, Queue_indexedQueueMixin()), function QueuedEnumerator(instance, capacity, backpressureStrategy) {
        init(Disposable_mixin, instance);
        init(Queue_indexedQueueMixin(), instance, capacity, backpressureStrategy);
        pipe(instance, Disposable_onDisposed(() => {
            // FIXME: Maybe should clear the queue here as well to early
            // release references?
            instance[EnumeratorLike_hasCurrent] = false;
        }));
        return instance;
    }, props({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        [EnumeratorLike_move]() {
            if (this[CollectionLike_count] > 0) {
                const next = this[QueueLike_dequeue]();
                this[EnumeratorLike_current] = next;
                this[EnumeratorLike_hasCurrent] = true;
            }
            else {
                this[EnumeratorLike_hasCurrent] = false;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
})();
const Observable_zipObservables = /*@__PURE__*/ (() => {
    const shouldEmit = compose(ReadonlyArray_map((x) => x[EnumeratorLike_hasCurrent] || x[EnumeratorLike_move]()), ReadonlyArray_everySatisfy(isTrue));
    const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
    const Enumerator_hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
    const Enumerator_move = () => (enumerator) => {
        enumerator[EnumeratorLike_move]();
        return enumerator[EnumeratorLike_hasCurrent];
    };
    const shouldComplete = /*@__PURE__*/ (() => compose(ReadonlyArray_forEach(Enumerator_move()), ReadonlyArray_someSatisfy(x => x[DisposableLike_isDisposed])))();
    const createZipObserver = createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function ZipObserver(instance, delegate, enumerators, queuedEnumerator) {
        Observer_mixin_initFromDelegate(instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[__ZipObserver_enumerators] = enumerators;
        pipe(instance, Disposable_onComplete(() => {
            if (queuedEnumerator[DisposableLike_isDisposed] ||
                (!queuedEnumerator[EnumeratorLike_hasCurrent] &&
                    !queuedEnumerator[EnumeratorLike_move]())) {
                delegate[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [__ZipObserver_enumerators]: none,
        [__ZipObserver_queuedEnumerator]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[__ZipObserver_queuedEnumerator][QueueableLike_enqueue](next);
            const enumerators = this[__ZipObserver_enumerators];
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent));
            this[DelegatingLike_delegate][ObserverLike_notify](zippedNext);
            if (shouldComplete(enumerators)) {
                this[DisposableLike_dispose]();
            }
        },
    }));
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            enumerator[EnumeratorLike_move]();
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_everySatisfy(Enumerator_hasCurrent));
    const enumerableOnSubscribe = (observables) => (observer) => {
        const enumerators = pipe(observables, ReadonlyArray_map(Enumerable_enumerate()), ReadonlyArray_forEach(Disposable_addTo(observer)));
        const continuation = (scheduler) => {
            while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
                pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent), bindMethod(observer, ObserverLike_notify));
                scheduler[SchedulerLike_yield]();
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
    };
    const onSubscribe = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (Observable_isEnumerable(next)) {
                const enumerator = pipe(next, Enumerable_enumerate(), Disposable_addTo(observer));
                enumerator[EnumeratorLike_move]();
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(QueuedEnumerator_create(observer[BufferLike_capacity], observer[QueueableLike_backpressureStrategy]), Disposable_addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), Disposable_addTo(observer), bindMethod(next, ObservableLike_observe));
            }
        }
    };
    return (observables) => {
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return isEnumerable
            ? Enumerable_create(enumerableOnSubscribe(observables))
            : isRunnable
                ? Runnable_create(onSubscribe(observables))
                : Observable_create(onSubscribe(observables));
    };
})();
export default Observable_zipObservables;
