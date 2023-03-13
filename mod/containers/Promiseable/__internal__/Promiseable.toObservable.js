/// <reference types="./Promiseable.toObservable.d.ts" />

import { DispatcherLike_complete, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableLike_isDisposed, QueueableLike_push, } from "../../../util.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";
const Promiseable_toObservable = () => (promise) => Observable_create(observer => {
    promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
            observer[QueueableLike_push](next);
            observer[DispatcherLike_complete]();
        }
    }, Disposable_toErrorHandler(observer));
});
export default Promiseable_toObservable;
