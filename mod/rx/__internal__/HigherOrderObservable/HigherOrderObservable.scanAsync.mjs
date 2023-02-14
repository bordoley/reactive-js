/// <reference types="./HigherOrderObservable.scanAsync.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Observable_forEach from '../../Observable/__internal__/Observable.forEach.mjs';
import Observable_onSubscribe from '../../Observable/__internal__/Observable.onSubscribe.mjs';
import Observable_switchAll from '../../Observable/__internal__/Observable.switchAll.mjs';
import Observable_takeFirst from '../../Observable/__internal__/Observable.takeFirst.mjs';
import Observable_zipWithLatestFrom from '../../Observable/__internal__/Observable.zipWithLatestFrom.mjs';
import ReactiveContainer_sinkInto from '../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Subject_create from '../../Subject/__internal__/Subject.create.mjs';
import Subject_publish from '../../Subject/__internal__/Subject.publish.mjs';
import Subject_publishTo from '../../Subject/__internal__/Subject.publishTo.mjs';

const HigherOrderObservable_scanAsync = (createObservable) => (scanner, initialValue) => observable => {
    const onSink = (observer) => {
        const accFeedbackStream = pipe(Subject_create(), Disposable_addTo(observer));
        pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeFirst())), Observable_switchAll(), Observable_forEach(Subject_publishTo(accFeedbackStream)), Observable_onSubscribe(() => pipe(accFeedbackStream, Subject_publish(initialValue()))), ReactiveContainer_sinkInto(observer));
    };
    return createObservable(onSink);
};

export { HigherOrderObservable_scanAsync as default };
