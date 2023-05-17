/// <reference types="./Observable.scanMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import MulticastObservable_concatAll from "../../MulticastObservable/__internal__/MulticastObservable.concatAll.js";
import MulticastObservable_concatMap from "../../MulticastObservable/__internal__/MulticastObservable.concatMap.js";
import Publisher_create from "../../Observable/__internal__/Observable.createPublisher.js";
import { bindMethod, compose, invoke, pipe, } from "../../functions.js";
import { ObservableLike_observe, SinkLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_forkMerge from "./Observable.forkMerge.js";
import Observable_ignoreElements from "./Observable.ignoreElements.js";
import Observable_takeLast from "./Observable.takeLast.js";
import Observable_zipWithLatestFrom from "./Observable.zipWithLatestFrom.js";
const HigherOrderObservable_scanMany = (createObservable) => (scanner, initialValue) => observable => createObservable((observer) => {
    const accFeedbackStream = pipe(Publisher_create(), Disposable_addTo(observer));
    pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => scanner(acc, next)), Observable_forkMerge(compose(MulticastObservable_concatMap(Observable_takeLast()), Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)), Observable_ignoreElements()), MulticastObservable_concatAll()), invoke(ObservableLike_observe, observer));
    accFeedbackStream[SinkLike_notify](initialValue());
});
export default HigherOrderObservable_scanMany;
