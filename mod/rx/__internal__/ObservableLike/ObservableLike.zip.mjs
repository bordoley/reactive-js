/// <reference types="./ObservableLike.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ContainerLike__keepType from '../../../containers/__internal__/ContainerLike/ContainerLike.keepType.mjs';
import ReadonlyArrayLike__every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__forEach from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import ReadonlyArrayLike__keepT from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keepT.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import ReadonlyArrayLike__some from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some.mjs';
import { compose, isTrue, pipe, none, getOrRaise, isSome } from '../../../functions.mjs';
import { enumerate } from '../../../ix/EnumerableLike.mjs';
import EnumerableLike__toRunnableObservable from '../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import EnumerableLike__zip from '../../../ix/__internal__/EnumerableLike/EnumerableLike.zip.mjs';
import EnumeratorLike__getCurrent from '../../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../../../ix/__internal__/EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumeratorLike__move from '../../../ix/__internal__/EnumeratorLike/EnumeratorLike.move.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import EnumeratorSinkLike__create from '../EnumeratorSinkLike/EnumeratorSinkLike.create.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__toEnumerable from './ObservableLike.toEnumerable.mjs';

const ObservableLike__zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const shouldEmit = compose(ReadonlyArrayLike__map((x) => EnumeratorLike__hasCurrent(x) || EnumeratorLike__move(x)), ReadonlyArrayLike__every(isTrue));
    const shouldComplete = compose(ReadonlyArrayLike__forEach(EnumeratorLike__move), ReadonlyArrayLike__some(DisposableLike__isDisposed));
    const createZipObserver = createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, ObserverLike__getScheduler(delegate));
        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;
        pipe(instance, DisposableLike__onComplete(() => {
            if (DisposableLike__isDisposed(sinkEnumerator) ||
                (!EnumeratorLike__hasCurrent(sinkEnumerator) &&
                    !EnumeratorLike__move(sinkEnumerator))) {
                pipe(delegate, DisposableLike__dispose());
            }
        }));
        return instance;
    }, props({
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
    }), {
        [SinkLike_notify](next) {
            const { sinkEnumerator, enumerators } = this;
            if (DisposableLike__isDisposed(this)) {
                return;
            }
            pipe(sinkEnumerator, SinkLike__notify(next));
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArrayLike__map(EnumeratorLike__getCurrent));
            pipe(this.delegate, SinkLike__notify(zippedNext));
            if (shouldComplete(enumerators)) {
                pipe(this, DisposableLike__dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (ObservableLike__isEnumerable(next)) {
                const enumerator = pipe(next, ObservableLike__toEnumerable(), getOrRaise(), enumerate(), DisposableLike__addTo(observer));
                EnumeratorLike__move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(EnumeratorSinkLike__create(), DisposableLike__addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), DisposableLike__addTo(observer), SinkLike__sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, ReadonlyArrayLike__map(ObservableLike__toEnumerable()), ContainerLike__keepType(ReadonlyArrayLike__keepT, isSome), enumerables => EnumerableLike__zip(...enumerables), EnumerableLike__toRunnableObservable())
            : isRunnable
                ? RunnableObservableLike__create(onSink(observables))
                : ObservableLike__create(onSink(observables));
    };
})();

export { ObservableLike__zip as default };
