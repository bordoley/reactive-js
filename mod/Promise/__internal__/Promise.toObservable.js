/// <reference types="./Promise.toObservable.d.ts" />

import Disposable_toErrorHandler from "../../Disposable/__internal__/Disposable.toErrorHandler.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { DispatcherLike_complete, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../types.js";
const Promise_toObservable = () => (promise) => SharedObservable_create(observer => {
    promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
            observer[QueueableLike_enqueue](next);
            observer[DispatcherLike_complete]();
        }
    }, Disposable_toErrorHandler(observer));
});
export default Promise_toObservable;
