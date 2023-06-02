/// <reference types="./Observable.scanMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { bindMethod, invoke, pipe, } from "../../functions.js";
import { ObservableLike_observe, SinkLike_notify, } from "../../types.js";
import Observable_create from "./Observable.create.js";
import Observable_createPublisher from "./Observable.createPublisher.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_zipLatest from "./Observable.zipLatest.js";
const Observable_scanMany = (scanner, initialValue) => (observable) => Observable_create(observer => {
    const accFeedbackStream = pipe(Observable_createPublisher(), Disposable_addTo(observer));
    pipe(Observable_zipLatest(accFeedbackStream, observable), Observable_switchMap(([acc, next]) => scanner(acc, next)), Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)), invoke(ObservableLike_observe, observer));
    accFeedbackStream[SinkLike_notify](initialValue());
});
export default Observable_scanMany;
