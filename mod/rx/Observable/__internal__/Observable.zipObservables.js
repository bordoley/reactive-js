/// <reference types="./Observable.zipObservables.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_some from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.some.js";
import { compose, isTrue, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../../rx/Enumerable/__internal__/Enumerable.enumerate.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Enumerator_getCurrent from "../../../util/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../../util/Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../../util/Enumerator/__internal__/Enumerator.move.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const QueuedEnumerator_create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function QueuedEnumerator(instance) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
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
            if (!Disposable_isDisposed(this) && this[QueueLike_count] > 0) {
                const next = this[PullableQueueLike_pull]();
                this[EnumeratorLike_current] = next;
                this[EnumeratorLike_hasCurrent] = true;
            }
            else {
                this[EnumeratorLike_hasCurrent] = false;
            }
        },
    }));
})();
const Observable_zipObservables = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const shouldEmit = compose(ReadonlyArray_map((x) => Enumerator_hasCurrent(x) || Enumerator_move(x)), ReadonlyArray_every(isTrue));
    const shouldComplete = compose(ReadonlyArray_forEach(Enumerator_move), ReadonlyArray_some(Disposable_isDisposed));
    const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
    const ZipObserver_queuedEnumerator = Symbol("ZipObserver_queuedEnumerator");
    const createZipObserver = createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function ZipObserver(instance, delegate, enumerators, queuedEnumerator) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(delegatingMixin(), instance, delegate);
        instance[ZipObserver_queuedEnumerator] = queuedEnumerator;
        instance[ZipObserver_enumerators] = enumerators;
        pipe(instance, Disposable_onComplete(() => {
            if (Disposable_isDisposed(queuedEnumerator) ||
                (!Enumerator_hasCurrent(queuedEnumerator) &&
                    !Enumerator_move(queuedEnumerator))) {
                pipe(delegate, Disposable_dispose());
            }
        }));
        return instance;
    }, props({
        [ZipObserver_enumerators]: none,
        [ZipObserver_queuedEnumerator]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const { [ZipObserver_queuedEnumerator]: queuedEnumerator, [ZipObserver_enumerators]: enumerators, } = this;
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            queuedEnumerator[QueueLike_push](next);
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent));
            this[DelegatingLike_delegate][ObserverLike_notify](zippedNext);
            if (shouldComplete(enumerators)) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            Enumerator_move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_every(Enumerator_hasCurrent));
    const enumerableOnSubscribe = (observables) => (observer) => {
        const enumerators = pipe(observables, ReadonlyArray_map(Enumerable_enumerate()), ReadonlyArray_forEach(Disposable_addTo(observer)));
        const continuation = () => {
            while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
                pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent), Observer_notifyObserver(observer));
                Continuation__yield();
            }
            pipe(observer, Disposable_dispose());
        };
        pipe(observer, Observer_schedule(continuation));
    };
    const onSubscribe = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (Observable_isEnumerable(next)) {
                const enumerator = pipe(next, Enumerable_enumerate(), Disposable_addTo(observer));
                Enumerator_move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(QueuedEnumerator_create(), Disposable_addTo(observer));
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
