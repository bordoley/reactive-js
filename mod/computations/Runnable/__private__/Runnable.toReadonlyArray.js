/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
const Runnable_toReadonlyArray = 
/*@__PURE__*/ returns((runnable) => {
    const sink = Sink.createQueueSink();
    runnable[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);
    return Array.from(sink);
});
export default Runnable_toReadonlyArray;
