/// <reference types="./Observable.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container$keepType from '../../../containers/__internal__/Container/Container.keepType.mjs';
import ReadonlyArray$every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray$forEach from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray$keep from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import ReadonlyArray$some from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.some.mjs';
import { compose, isTrue, pipe, none, getOrRaise, isSome } from '../../../functions.mjs';
import Enumerable$enumerate from '../../../ix/__internal__/Enumerable/Enumerable.enumerate.mjs';
import Enumerable$toRunnableObservable from '../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable.mjs';
import Enumerable$zip from '../../../ix/__internal__/Enumerable/Enumerable.zip.mjs';
import Enumerator$getCurrent from '../../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../../../ix/__internal__/Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator$move from '../../../ix/__internal__/Enumerator/Enumerator.move.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import EnumeratorSink$create from '../EnumeratorSink/EnumeratorSink.create.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import RunnableObservable$create from '../RunnableObservable/RunnableObservable.create.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable$allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable$create from './Observable.create.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';
import Observable$toEnumerable from './Observable.toEnumerable.mjs';

const Observable$zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    const shouldEmit = compose(ReadonlyArray$map((x) => Enumerator$hasCurrent(x) || Enumerator$move(x)), ReadonlyArray$every(isTrue));
    const shouldComplete = compose(ReadonlyArray$forEach(Enumerator$move), ReadonlyArray$some(Disposable$isDisposed));
    const createZipObserver = createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(Disposable$mixin, instance);
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;
        pipe(instance, Disposable$onComplete(() => {
            if (Disposable$isDisposed(sinkEnumerator) ||
                (!Enumerator$hasCurrent(sinkEnumerator) &&
                    !Enumerator$move(sinkEnumerator))) {
                pipe(delegate, Disposable$dispose());
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
            if (Disposable$isDisposed(this)) {
                return;
            }
            pipe(sinkEnumerator, Sink$notify(next));
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, ReadonlyArray$map(Enumerator$getCurrent));
            pipe(this.delegate, Sink$notify(zippedNext));
            if (shouldComplete(enumerators)) {
                pipe(this, Disposable$dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (Observable$isEnumerable(next)) {
                const enumerator = pipe(next, Observable$toEnumerable(), getOrRaise(), Enumerable$enumerate(), Disposable$addTo(observer));
                Enumerator$move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(EnumeratorSink$create(), Disposable$addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), Disposable$addTo(observer), Sink$sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = Observable$allAreEnumerable(observables);
        const isRunnable = Observable$allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, ReadonlyArray$map(Observable$toEnumerable()), Container$keepType({ keep: ReadonlyArray$keep }, isSome), enumerables => Enumerable$zip(...enumerables), Enumerable$toRunnableObservable())
            : isRunnable
                ? RunnableObservable$create(onSink(observables))
                : Observable$create(onSink(observables));
    };
})();

export { Observable$zip as default };
