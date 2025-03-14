/// <reference types="./Observable.fromAsyncFactory.d.ts" />

import { error } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, SinkLike_complete, SinkLike_push, } from "../../../utils.js";
import Observable_create from "./Observable.create.js";
const Observable_fromAsyncFactory = () => (f) => Observable_create(async (observer) => {
    const abortSignal = DisposableContainer.toAbortSignal(observer);
    try {
        const result = await f(abortSignal);
        observer[SinkLike_push](result);
        observer[SinkLike_complete]();
    }
    catch (e) {
        observer[DisposableLike_dispose](error(e));
    }
});
export default Observable_fromAsyncFactory;
