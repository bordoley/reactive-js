import { ReadonlyArrayLike } from "../../../containers";
import { RunnableLike, SinkLike_notify, ToRunnable } from "../../../rx";
import Runnable$create from "../../../rx/__internal__/Runnable/Runnable.create";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import ReadonlyArray$toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray$toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  /*@__PURE__*/ (<T>() => {
    return ReadonlyArray$toContainer<RunnableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) =>
        Runnable$create<T>(sink => {
          for (
            let index = startIndex, cnt = count;
            !Disposable$isDisposed(sink) && cnt !== 0;
            cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
          ) {
            sink[SinkLike_notify](values[index]);
          }
        }),
    );
  })();

export default ReadonlyArray$toRunnable;
