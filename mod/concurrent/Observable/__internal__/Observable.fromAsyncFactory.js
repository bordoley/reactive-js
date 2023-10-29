/// <reference types="./Observable.fromAsyncFactory.d.ts" />

import { DispatcherLike_complete } from "../../../concurrent.js";
import { error } from "../../../functions.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
const Observable_fromAsyncFactory = () => (f) => Observable_create(async (observer) => {
    const abortSignal = Disposable.toAbortSignal(observer);
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
