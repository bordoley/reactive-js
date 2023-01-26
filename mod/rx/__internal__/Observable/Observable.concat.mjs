/// <reference types="./Observable.concat.d.ts" />
import { pipe, getLength, isEmpty } from '../../../functions.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer$createWithDelegate from '../Observer/Observer.createWithDelegate.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable$allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable$create from './Observable.create.mjs';

const Observable$concat = /*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer$createWithDelegate(delegate), Disposable$addTo(delegate), Disposable$onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), Sink$sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, Disposable$dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), Sink$sourceFrom(observables[0]));
            }
            else {
                pipe(observer, Disposable$dispose());
            }
        };
        const isEnumerable = Observable$allAreEnumerable(observables);
        const isRunnable = Observable$allAreRunnable(observables);
        return Observable$create(onSink, isEnumerable, isRunnable);
    };
})();

export { Observable$concat as default };
