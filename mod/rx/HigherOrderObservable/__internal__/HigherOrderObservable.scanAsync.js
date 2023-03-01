/// <reference types="./HigherOrderObservable.scanAsync.d.ts" />

import { pipe } from "../../../functions.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_onSubscribe from "../../Observable/__internal__/Observable.onSubscribe.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publish from "../../Subject/__internal__/Subject.publish.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";
const HigherOrderObservable_scanAsync = (createObservable) => (scanner, initialValue) => observable => {
    const onSink = (observer) => {
        const accFeedbackStream = pipe(Subject_create(), Disposable_addTo(observer));
        pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeFirst())), Observable_switchAll(), Observable_forEach(Subject_publishTo(accFeedbackStream)), Observable_onSubscribe(() => pipe(accFeedbackStream, Subject_publish(initialValue()))), Observable_observeWith(observer));
    };
    return createObservable(onSink);
};
export default HigherOrderObservable_scanAsync;
