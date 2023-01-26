import { ReadonlyArrayLike } from "../../../containers";
import { RunnableLike, SinkLike_notify, ToRunnable } from "../../../rx";
import Runnable_create from "../../../rx/__internal__/Runnable/Runnable.create";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  /*@__PURE__*/ (<T>() => {
    return ReadonlyArray_toContainer<RunnableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) =>
        Runnable_create<T>(sink => {
          for (
            let index = startIndex, cnt = count;
            !Disposable_isDisposed(sink) && cnt !== 0;
            cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
          ) {
            sink[SinkLike_notify](values[index]);
          }
        }),
    );
  })();

export default ReadonlyArray_toRunnable;
