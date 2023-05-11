import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as Observable from "../../Observable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, SchedulerLike_schedule } from "../../types.js";

const emptyEnumerable = /*@__PURE__*/ Enumerable_create(observer => {
  observer[DisposableLike_dispose]();
});

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
