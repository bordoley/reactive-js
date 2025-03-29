/// <reference types="./Runnable.last.d.ts" />

import { RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { CollectionEnumeratorLike_peek } from "../../../utils.js";
const Runnable_last = /*@__PURE__*/ returns((runnable) => {
    const sink = Consumer.takeLast(1);
    runnable[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);
    return sink[CollectionEnumeratorLike_peek];
});
export default Runnable_last;
