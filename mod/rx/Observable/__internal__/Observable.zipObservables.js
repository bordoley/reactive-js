/// <reference types="./Observable.zipObservables.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ZipObserver_enumerators, ZipObserver_queuedEnumerator, } from "../../../__internal__/symbols.js";
import { QueueLike_count, QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import { bindMethod, compose, isTrue, none, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../../rx/Enumerable/__internal__/Enumerable.enumerate.js";
import { ContinuationContextLike_yield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, QueueableLike_maxBufferSize, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const QueuedEnumerator_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function QueuedEnumerator(instance, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
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
            if (this[QueueLike_count] > 0) {
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
    const typedObserverMixin = Observer_mixin();
    const shouldEmit = compose(ReadonlyArray_map((x) => x[EnumeratorLike_hasCurrent] || x[EnumeratorLike_move]()), ReadonlyArray_every(isTrue));
    const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
    const Enumerator_hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
    const Enumerator_move = () => (enumerator) => {
        enumerator[EnumeratorLike_move]();
        return enumerator[EnumeratorLike_hasCurrent];
    };
    const shouldComplete = /*@__PURE__*/ (() => compose(ReadonlyArray_forEach(Enumerator_move()), ReadonlyArray_some(x => x[DisposableLike_isDisposed])))();
    const createZipObserver = createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function ZipObserver(instance, delegate, enumerators, queuedEnumerator) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_maxBufferSize]);
        init(delegatingMixin(), instance, delegate);
        instance[ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[ZipObserver_enumerators] = enumerators;
        pipe(instance, Disposable_onComplete(() => {
            if (queuedEnumerator[DisposableLike_isDisposed] ||
                (!queuedEnumerator[EnumeratorLike_hasCurrent] &&
                    !queuedEnumerator[EnumeratorLike_move]())) {
                delegate[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [ZipObserver_enumerators]: none,
        [ZipObserver_queuedEnumerator]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[ZipObserver_queuedEnumerator][QueueableLike_enqueue](next);
            const enumerators = this[ZipObserver_enumerators];
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
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_every(Enumerator_hasCurrent));
    const enumerableOnSubscribe = (observables) => (observer) => {
        const enumerators = pipe(observables, ReadonlyArray_map(Enumerable_enumerate()), ReadonlyArray_forEach(Disposable_addTo(observer)));
        const continuation = (ctx) => {
            while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
                pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent), bindMethod(observer, ObserverLike_notify));
                ctx[ContinuationContextLike_yield]();
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer, Observer_schedule(continuation));
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
                const enumerator = pipe(QueuedEnumerator_create(observer[QueueableLike_maxBufferSize]), Disposable_addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), Disposable_addTo(observer), Observer_sourceFrom(next));
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
