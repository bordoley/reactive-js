/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
const Runnable_toReadonlyArray = 
/*@__PURE__*/ returns((runnable) => {
    const sink = Consumer.create();
    runnable[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);
    return Array.from(sink);
});
export default Runnable_toReadonlyArray;
