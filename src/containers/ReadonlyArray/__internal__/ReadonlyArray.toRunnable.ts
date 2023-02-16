import { ReadonlyArrayLike } from "../../../containers";
import { RunnableLike, SinkLike_notify, ToRunnable } from "../../../rx";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create";
import { DisposableLike_isDisposed } from "../../../util";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  /*@__PURE__*/ ReadonlyArray_toContainer<RunnableLike>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      Runnable_create<T>(sink => {
        for (
          let index = startIndex, cnt = count;
          !sink[DisposableLike_isDisposed] && cnt !== 0;
          cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
        ) {
          sink[SinkLike_notify](values[index]);
        }
      }),
  );

export default ReadonlyArray_toRunnable;
