/// <reference types="./HigherOrderObservable.scanLast.d.ts" />

import { bindMethod, invoke, pipe, } from "../../../functions.js";
import { EventListenerLike_notify, ObservableLike_observe, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
const HigherOrderObservable_scanLast = (createObservable) => (scanner, initialValue) => observable => createObservable((observer) => {
    const accFeedbackStream = pipe(Publisher_create(), Disposable_addTo(observer));
    pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeLast())), Observable_concatAll(), Observable_forEach(bindMethod(accFeedbackStream, EventListenerLike_notify)), invoke(ObservableLike_observe, observer));
    accFeedbackStream[EventListenerLike_notify](initialValue());
});
export default HigherOrderObservable_scanLast;
