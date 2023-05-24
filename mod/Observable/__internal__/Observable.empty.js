/// <reference types="./Observable.empty.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, SchedulerLike_schedule } from "../../types.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty, true);
const Observable_empty = ((options) => (options?.delay ?? 0) > 0
    ? Runnable_create(observer => {
        pipe(observer[SchedulerLike_schedule](() => observer[DisposableLike_dispose](), options), Disposable_addTo(observer));
    })
    : emptyEnumerable);
export default Observable_empty;
