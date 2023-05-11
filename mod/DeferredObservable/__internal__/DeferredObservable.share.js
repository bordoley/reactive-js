/// <reference types="./DeferredObservable.share.d.ts" />

import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { none, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import DeferredObservable_multicastImpl from "./DeferredObservable.multicastImpl.js";
const createLazySharedObservable = (factory) => SharedObservable_create(observer => {
    factory()[ObservableLike_observe](observer);
});
const DeferredObservable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    return createLazySharedObservable(() => multicasted ??
        (() => {
            multicasted = pipe(source, DeferredObservable_multicastImpl(Publisher_createRefCounted, schedulerOrFactory, options), Disposable_onDisposed(() => {
                multicasted = none;
            }));
            return multicasted;
        })());
};
export default DeferredObservable_share;
