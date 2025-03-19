import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] =
  /*@__PURE__*/ returns((runnable: RunnableLike) => {
    const sink = Sink.createQueueSink();
    runnable[RunnableLike_eval](sink);

    Disposable.raiseIfDisposedWithError(sink);

    return Array.from(sink);
  }) as Runnable.Signature["toReadonlyArray"];
export default Runnable_toReadonlyArray;
