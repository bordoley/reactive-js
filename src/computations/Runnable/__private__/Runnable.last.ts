import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DropOldestBackpressureStrategy } from "../../../utils.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_last: Runnable.Signature["last"] = /*@__PURE__*/ (<T>() =>
  returns((runnable: RunnableLike<T>) => {
    const sink = Sink.createQueueSink<T>({
      capacity: 1,
      backpressureStrategy: DropOldestBackpressureStrategy,
    });
    runnable[RunnableLike_eval](sink);

    Disposable.raiseIfDisposedWithError(sink);

    return pipe(sink, Iterable_first());
  }))();

export default Runnable_last;
