/// <reference types="./Observable.zip.d.ts" />
import { createInstanceFactory, mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import Container_keepType from '../../../containers/__internal__/Container/Container.keepType.mjs';
import ReadonlyArray_every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray_keep from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray_map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import ReadonlyArray_some from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.some.mjs';
import { compose, isTrue, pipe, none, isSome } from '../../../functions.mjs';
import Enumerable_enumerate from '../../../ix/__internal__/Enumerable/Enumerable.enumerate.mjs';
import Enumerable_toRunnableObservable from '../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable.mjs';
import Enumerable_zip from '../../../ix/__internal__/Enumerable/Enumerable.zip.mjs';
import Enumerator_getCurrent from '../../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../../ix/__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator_move from '../../../ix/__internal__/Enumerator/Enumerator.move.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import EnumerableObservable_toEnumerable from '../EnumerableObservable/EnumerableObservable.toEnumerable.mjs';
import EnumeratorSink_create from '../EnumeratorSink/EnumeratorSink.create.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import RunnableObservable_create from '../RunnableObservable/RunnableObservable.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable_create from './Observable.create.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';

const Observable_zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const shouldEmit = compose(ReadonlyArray_map((x) => Enumerator_hasCurrent(x) || Enumerator_move(x)), ReadonlyArray_every(isTrue));
    const shouldComplete = compose(ReadonlyArray_forEach(Enumerator_move), ReadonlyArray_some(Disposable_isDisposed));
    const ZipObserver_enumerators = Symbol("ZipObserver_enumerators");
    const ZipObserver_sinkEnumerator = Symbol("ZipObserver_sinkEnumerator");
    const createZipObserver = createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(delegatingMixin(), instance, delegate);
        instance[ZipObserver_sinkEnumerator] = sinkEnumerator;
        instance[ZipObserver_enumerators] = enumerators;
        pipe(instance, Disposable_onComplete(() => {
            if (Disposable_isDisposed(sinkEnumerator) ||
                (!Enumerator_hasCurrent(sinkEnumerator) &&
                    !Enumerator_move(sinkEnumerator))) {
                pipe(delegate, Disposable_dispose());
            }
        }));
        return instance;
    }, props({
        [ZipObserver_enumerators]: none,
        [ZipObserver_sinkEnumerator]: none,
    }), {
        [SinkLike_notify](next) {
            const { [ZipObserver_sinkEnumerator]: sinkEnumerator, [ZipObserver_enumerators]: enumerators, } = this;
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            sinkEnumerator[SinkLike_notify](next);
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent));
            this[DelegatingLike_delegate][SinkLike_notify](zippedNext);
            if (shouldComplete(enumerators)) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (Observable_isEnumerable(next)) {
                const enumerator = pipe(next, EnumerableObservable_toEnumerable(), Enumerable_enumerate(), Disposable_addTo(observer));
                Enumerator_move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(EnumeratorSink_create(), Disposable_addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), Disposable_addTo(observer), Sink_sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, ReadonlyArray_map(EnumerableObservable_toEnumerable()), Container_keepType({ keep: ReadonlyArray_keep }, isSome), enumerables => Enumerable_zip(...enumerables), Enumerable_toRunnableObservable())
            : isRunnable
                ? RunnableObservable_create(onSink(observables))
                : Observable_create(onSink(observables));
    };
})();

export { Observable_zip as default };
