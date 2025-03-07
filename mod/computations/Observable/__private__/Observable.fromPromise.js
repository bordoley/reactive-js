/// <reference types="./Observable.fromPromise.d.ts" />

import { DispatcherLike_complete } from "../../../computations.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
const Observable_fromPromise = () => (promise) => Observable_createMulticast(observer => {
    promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
            observer[QueueableLike_enqueue](next);
            observer[DispatcherLike_complete]();
        }
    }, Disposable.toErrorHandler(observer));
});
export default Observable_fromPromise;
