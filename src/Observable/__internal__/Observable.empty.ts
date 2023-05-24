import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import type * as Observable from "../../Observable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, SchedulerLike_schedule } from "../../types.js";

const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty, true);

const Observable_empty: Observable.Signature["empty"] = (<T>(options?: {
  readonly delay: number;
}) =>
  (options?.delay ?? 0) > 0
    ? Runnable_create<T>(observer => {
        pipe(
          observer[SchedulerLike_schedule](
            () => observer[DisposableLike_dispose](),
            options,
          ),
          Disposable_addTo(observer),
        );
      })
    : emptyEnumerable) as Observable.Signature["empty"];

export default Observable_empty;
