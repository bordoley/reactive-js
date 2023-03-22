/// <reference types="./HigherOrderObservable.scanLast.d.ts" />

import { pipe } from "../../../functions.js";
import { SubjectLike_publish, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";
const HigherOrderObservable_scanLast = (createObservable) => (scanner, initialValue) => observable => {
    const onSubscribe = (observer) => {
        const accFeedbackStream = pipe(Subject_create(), Disposable_addTo(observer));
        pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeLast())), Observable_switchAll(), Observable_forEach(Subject_publishTo(accFeedbackStream)), Observable_observeWith(observer));
        accFeedbackStream[SubjectLike_publish](initialValue());
    };
    return createObservable(onSubscribe);
};
export default HigherOrderObservable_scanLast;
