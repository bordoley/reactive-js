/// <reference types="./Observable.share.d.ts" />

import { isNone, isSome, none, pipe, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Observable_create from "./Observable.create.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_share = (schedulerOrFactory, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable_create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, Observable_multicast(schedulerOrFactory, options));
        }
        pipe(observer, Observer_sourceFrom(multicasted), Disposable_onDisposed(() => {
            if (isSome(multicasted) &&
                multicasted[MulticastObservableLike_observerCount] === 0) {
                multicasted[DisposableLike_dispose]();
                multicasted = none;
            }
        }));
    });
};
export default Observable_share;
