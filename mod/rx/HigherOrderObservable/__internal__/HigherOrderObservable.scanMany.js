/// <reference types="./HigherOrderObservable.scanMany.d.ts" />

import { bindMethod, compose, pipe, } from "../../../functions.js";
import { PublisherLike_publish, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatAll from "../../Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_takeLast from "../../Observable/__internal__/Observable.takeLast.js";
import Observable_zipWithLatestFrom from "../../Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
const HigherOrderObservable_scanMany = (createObservable) => (scanner, initialValue) => observable => createObservable((observer) => {
    const accFeedbackStream = pipe(Publisher_create(), Disposable_addTo(observer));
    pipe(observable, Observable_zipWithLatestFrom(accFeedbackStream, (next, acc) => scanner(acc, next)), Observable_forkMerge(compose(Observable_concatMap(Observable_takeLast()), Observable_forEach(bindMethod(accFeedbackStream, PublisherLike_publish)), Observable_ignoreElements()), Observable_concatAll()), Observable_observeWith(observer));
    accFeedbackStream[PublisherLike_publish](initialValue());
});
export default HigherOrderObservable_scanMany;
