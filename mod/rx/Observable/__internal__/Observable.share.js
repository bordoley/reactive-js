/// <reference types="./Observable.share.d.ts" />

import { isNone, none, pipe, } from "../../../functions.js";
import { ObservableLike_observe, } from "../../../rx.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import Observable_create from "./Observable.create.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable_create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, Observable_multicast(schedulerOrFactory, {
                ...options,
                publisherFactory: Publisher_createRefCounted,
            }), Disposable_onDisposed(() => {
                multicasted = none;
            }));
        }
        multicasted[ObservableLike_observe](observer);
    });
};
export default Observable_share;
