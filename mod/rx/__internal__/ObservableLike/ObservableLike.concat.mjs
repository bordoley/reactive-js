/// <reference types="./ObservableLike.concat.d.ts" />
import { pipe, getLength, isEmpty } from '../../../functions.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';

const ObservableLike__concat = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(ObserverLike__createWithDelegate(delegate), DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), SinkLike__sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, DisposableLike__dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), SinkLike__sourceFrom(observables[0]));
            }
            else {
                pipe(observer, DisposableLike__dispose());
            }
        };
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return ObservableLike__create(onSink, isEnumerable, isRunnable);
    };
})();

export { ObservableLike__concat as default };
