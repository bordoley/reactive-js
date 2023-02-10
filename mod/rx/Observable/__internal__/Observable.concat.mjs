/// <reference types="./Observable.concat.d.ts" />
import { pipe, getLength, isEmpty } from '../../../functions.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import Observer_createWithDelegate from '../../Observer/__internal__/Observer.createWithDelegate.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable_create from './Observable.create.mjs';

const Observable_concat = /*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), Sink_sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, Disposable_dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), Sink_sourceFrom(observables[0]));
            }
            else {
                pipe(observer, Disposable_dispose());
            }
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_create(onSink, isEnumerable, isRunnable);
    };
})();

export { Observable_concat as default };
