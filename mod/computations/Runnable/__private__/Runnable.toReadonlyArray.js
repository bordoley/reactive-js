/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
const Runnable_toReadonlyArray = returns((src) => {
    const buffer = [];
    const sink = Sink.collect(buffer);
    src[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);
    return buffer;
});
export default Runnable_toReadonlyArray;
