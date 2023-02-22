/// <reference types="./Observable.share.d.ts" />

import { isNone, isSome, none, pipe, } from "../../../functions.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Observable_create from "./Observable.create.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable_create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, Observable_multicast(scheduler, options));
        }
        pipe(observer, Sink_sourceFrom(multicasted), Disposable_onDisposed(() => {
            if (isSome(multicasted) &&
                MulticastObservable_getObserverCount(multicasted) === 0) {
                pipe(multicasted, Disposable_dispose());
                multicasted = none;
            }
        }));
    });
};
export default Observable_share;
