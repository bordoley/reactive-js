/// <reference types="./Observable.share.d.ts" />

import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import Observable_multicastImpl from "../../Observable/__internal__/Observable.multicastImpl.js";
import { none, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import Observable_createRefCountedPublisher from "./Observable.createRefCountedPublisher.js";
const createLazyMulticastObservable = (factory) => MulticastObservable_create(observer => {
    factory()[ObservableLike_observe](observer);
});
const Observable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    return createLazyMulticastObservable(() => multicasted ??
        (() => {
            multicasted = pipe(source, Observable_multicastImpl(Observable_createRefCountedPublisher, schedulerOrFactory, options));
            return multicasted;
        })());
};
export default Observable_share;
