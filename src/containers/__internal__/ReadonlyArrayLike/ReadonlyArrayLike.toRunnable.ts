import { ReadonlyArrayLike } from "../../../containers";
import { RunnableLike, SinkLike_notify, ToRunnable } from "../../../rx";
import RunnableLike__create from "../../../rx/__internal__/RunnableLike/RunnableLike.create";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const ReadonlyArrayLike__toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  /*@__PURE__*/ (<T>() => {
    return ReadonlyArrayLike__toContainer<RunnableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) =>
        RunnableLike__create<T>(sink => {
          for (
            let index = startIndex, cnt = count;
            !DisposableLike__isDisposed(sink) && cnt !== 0;
            cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
          ) {
            sink[SinkLike_notify](values[index]);
          }
        }),
    );
  })();

export default ReadonlyArrayLike__toRunnable;
