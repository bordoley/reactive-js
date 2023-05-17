/// <reference types="./Observable.scanLast.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import MulticastObservable_concatAll from "../../MulticastObservable/__internal__/MulticastObservable.concatAll.js";
import Publisher_create from "../../Observable/__internal__/Observable.createPublisher.js";
import { bindMethod, invoke, pipe, } from "../../functions.js";
import { ObservableLike_observe, SinkLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_takeLast from "./Observable.takeLast.js";
import Observable_zipWithLatestFrom from "./Observable.zipWithLatestFrom.js";
const Observable_scanLast = (createObservable) => (scanner, initialValue) => observable => createObservable((observer) => {
    const accFeedbackStream = pipe(Publisher_create(), Disposable_addTo(observer));
    pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable_takeLast())), MulticastObservable_concatAll(), Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)), invoke(ObservableLike_observe, observer));
    accFeedbackStream[SinkLike_notify](initialValue());
});
export default Observable_scanLast;
