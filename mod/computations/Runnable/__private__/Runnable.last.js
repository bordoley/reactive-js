/// <reference types="./Runnable.last.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DropOldestBackpressureStrategy } from "../../../utils.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
const Runnable_last = /*@__PURE__*/ (() => returns((runnable) => {
    const sink = Sink.createQueueSink({
        capacity: 1,
        backpressureStrategy: DropOldestBackpressureStrategy,
    });
    runnable[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);
    return pipe(sink, Iterable_first());
}))();
export default Runnable_last;
