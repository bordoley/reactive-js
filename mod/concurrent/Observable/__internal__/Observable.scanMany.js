/// <reference types="./Observable.scanMany.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, invoke, pipe, } from "../../../functions.js";
import { SinkLike_notify } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as ReplayPublisher from "../../ReplayPublisher.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_zipLatest from "./Observable.zipLatest.js";
const Observable_scanMany = (scanner, initialValue) => (observable) => Observable_create(observer => {
    const accFeedbackStream = pipe(ReplayPublisher.create(), Disposable.addTo(observer));
    pipe(Observable_zipLatest(accFeedbackStream, observable), Observable_switchMap(([acc, next]) => scanner(acc, next)), Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)), invoke(ObservableLike_observe, observer));
    accFeedbackStream[SinkLike_notify](initialValue());
});
export default Observable_scanMany;
