/// <reference types="./HigherOrderObservable.scanAsync.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Observable_forEach from '../Observable/Observable.forEach.mjs';
import Observable_onSubscribe from '../Observable/Observable.onSubscribe.mjs';
import Observable_switchAll from '../Observable/Observable.switchAll.mjs';
import Observable_takeFirst from '../Observable/Observable.takeFirst.mjs';
import Observable_zipWithLatestFrom from '../Observable/Observable.zipWithLatestFrom.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Subject_create from '../Subject/Subject.create.mjs';
import Subject_publish from '../Subject/Subject.publish.mjs';
import Subject_publishTo from '../Subject/Subject.publishTo.mjs';

const HigherOrderObservable_scanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(Subject_create(), Disposable_addTo(observer));
            pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeFirst())), Observable_switchAll(), Observable_forEach(Subject_publishTo(accFeedbackStream)), Observable_onSubscribe(() => pipe(accFeedbackStream, Subject_publish(initialValue()))), ReactiveContainer_sinkInto(observer));
        };
        return createObservable(onSink);
    };
};

export { HigherOrderObservable_scanAsync as default };
