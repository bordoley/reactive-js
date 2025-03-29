/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
const Runnable_toReadonlyArray = returns((src) => {
    const consumer = Consumer.create();
    src[RunnableLike_eval](consumer);
    Disposable.raiseIfDisposedWithError(consumer);
    return Array.from(consumer);
});
export default Runnable_toReadonlyArray;
