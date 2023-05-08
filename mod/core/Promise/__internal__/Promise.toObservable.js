/// <reference types="./Promise.toObservable.d.ts" />

import { DispatcherLike_complete, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../core.js";
import Disposable_toErrorHandler from "../../../core/Disposable/__internal__/Disposable.toErrorHandler.js";
import Observable_create from "../../../core/Observable/__internal__/Observable.create.js";
const Promise_toObservable = () => (promise) => Observable_create(observer => {
    promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
            observer[QueueableLike_enqueue](next);
            observer[DispatcherLike_complete]();
        }
    }, Disposable_toErrorHandler(observer));
});
export default Promise_toObservable;
