/// <reference types="./Observable.fromAsyncFactory.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_toAbortSignal from "../../Disposable/__internal__/Disposable.toAbortSignal.js";
import { error } from "../../functions.js";
import { DispatcherLike_complete, DisposableLike_dispose, QueueableLike_enqueue, } from "../../types.js";
const Observable_fromAsyncFactory = () => (f) => DeferredObservable_create(async (observer) => {
    const abortSignal = Disposable_toAbortSignal(observer);
    try {
        const result = await f(abortSignal);
        observer[QueueableLike_enqueue](result);
        observer[DispatcherLike_complete]();
    }
    catch (e) {
        observer[DisposableLike_dispose](error(e));
    }
});
export default Observable_fromAsyncFactory;
