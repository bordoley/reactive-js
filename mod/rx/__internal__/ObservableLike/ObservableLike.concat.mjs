/// <reference types="./ObservableLike.concat.d.ts" />
import { pipe, getLength, isEmpty } from '../../../functions.mjs';
import { addTo, onComplete, dispose } from '../../../util/DisposableLike.mjs';
import { sourceFrom } from '../../SinkLike.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';

const ObservableLike__concat = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(ObserverLike__createWithDelegate(delegate), addTo(delegate), onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
            }
            else {
                pipe(observer, dispose());
            }
        };
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return ObservableLike__create(onSink, isEnumerable, isRunnable);
    };
})();

export { ObservableLike__concat as default };
