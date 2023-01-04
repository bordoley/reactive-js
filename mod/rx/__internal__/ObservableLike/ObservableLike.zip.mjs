/// <reference types="./ObservableLike.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { keepType } from '../../../containers/ContainerLike.mjs';
import { every, some } from '../../../containers/ReadonlyArrayLike.mjs';
import ReadonlyArrayLike__forEach from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import ReadonlyArrayLike__keepT from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keepT.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { compose, isTrue, pipe, none, getOrRaise, isSome } from '../../../functions.mjs';
import { enumerate } from '../../../ix/EnumerableLike.mjs';
import { hasCurrent, move, getCurrent } from '../../../ix/EnumeratorLike.mjs';
import EnumerableLike__toRunnableObservable from '../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import EnumerableLike__zip from '../../../ix/__internal__/EnumerableLike/EnumerableLike.zip.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { isDisposed, onComplete, dispose, addTo } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { notify, sourceFrom } from '../../SinkLike.mjs';
import EnumeratorSinkLike__create from '../EnumeratorSinkLike/EnumeratorSinkLike.create.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__toEnumerable from './ObservableLike.toEnumerable.mjs';

const ObservableLike__zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const shouldEmit = compose(ReadonlyArrayLike__map((x) => hasCurrent(x) || move(x)), every(isTrue));
    const shouldComplete = compose(ReadonlyArrayLike__forEach(move), some(isDisposed));
    const createZipObserver = createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));
        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;
        pipe(instance, onComplete(() => {
            if (isDisposed(sinkEnumerator) ||
                (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))) {
                pipe(delegate, dispose());
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
            if (isDisposed(this)) {
                return;
            }
            pipe(sinkEnumerator, notify(next));
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArrayLike__map(getCurrent));
            pipe(this.delegate, notify(zippedNext));
            if (shouldComplete(enumerators)) {
                pipe(this, dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (ObservableLike__isEnumerable(next)) {
                const enumerator = pipe(next, ObservableLike__toEnumerable(), getOrRaise(), enumerate(), addTo(observer));
                move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(EnumeratorSinkLike__create(), addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), addTo(observer), sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, ReadonlyArrayLike__map(ObservableLike__toEnumerable()), keepType(ReadonlyArrayLike__keepT, isSome), enumerables => EnumerableLike__zip(...enumerables), EnumerableLike__toRunnableObservable())
            : isRunnable
                ? RunnableObservableLike__create(onSink(observables))
                : ObservableLike__create(onSink(observables));
    };
})();

export { ObservableLike__zip as default };
