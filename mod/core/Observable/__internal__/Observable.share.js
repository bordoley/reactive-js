/// <reference types="./Observable.share.d.ts" />

import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import { none, pipe, } from "../../../functions.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import Observable_defer from "./Observable.defer.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable_defer(() => multicasted ??
        (() => {
            multicasted = pipe(source, Observable_multicastImpl(Publisher_createRefCounted, schedulerOrFactory, options), Disposable_onDisposed(() => {
                multicasted = none;
            }));
            return multicasted;
        })());
};
export default Observable_share;
