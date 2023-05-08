/// <reference types="./Observable.empty.d.ts" />

import { DisposableLike_dispose, SchedulerLike_schedule, } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../../core/Enumerable/__internal__/Enumerable.create.js";
import { pipe } from "../../../functions.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(observer => {
    observer[DisposableLike_dispose]();
});
const Observable_empty = ((options) => (options?.delay ?? 0) > 0
    ? Runnable_create(observer => {
        pipe(observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), options), Disposable_addTo(observer));
    })
    : emptyEnumerable);
export default Observable_empty;
