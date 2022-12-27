import { create as RunnableLike__create } from "../../../__internal__/rx/RunnableLike.create";
import { ReadonlyArrayLike } from "../../../containers";
import { RunnableLike, SinkLike_notify, ToRunnable } from "../../../rx";
import { isDisposed } from "../../../util/DisposableLike";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] = /*@__PURE__*/ (<
  T,
>() => {
  return ReadonlyArrayLike__toContainer<RunnableLike<T>, T>(
    (values: readonly T[], startIndex: number, count: number) =>
      RunnableLike__create<T>(sink => {
        for (
          let index = startIndex, cnt = count;
          !isDisposed(sink) && cnt !== 0;
          cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
        ) {
          sink[SinkLike_notify](values[index]);
        }
      }),
  );
})();

export default toRunnable;
