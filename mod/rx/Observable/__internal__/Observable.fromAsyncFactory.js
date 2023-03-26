/// <reference types="./Observable.fromAsyncFactory.d.ts" />

import { error } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_toAbortSignal from "../../../util/Disposable/__internal__/Disposable.toAbortSignal.js";
import Observable_create from "./Observable.create.js";
const Observable_fromAsyncFactory = (f) => Observable_create(async (observer) => {
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
