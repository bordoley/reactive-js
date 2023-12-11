/// <reference types="./Observable.share.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import * as Subject from "../../Subject.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const createLazyMulticastObservable = (factory) => Observable_createMulticast(observer => {
    factory()[ObservableLike_observe](observer);
});
const Observable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    return createLazyMulticastObservable(() => multicasted ??
        (() => {
            multicasted = pipe(source, Observable_multicastImpl(Subject.createRefCounted, schedulerOrFactory, options));
            return multicasted;
        })());
};
export default Observable_share;
