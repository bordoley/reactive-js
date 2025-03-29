import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { CollectionEnumeratorLike_peek } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_last: Runnable.Signature["last"] = /*@__PURE__*/ returns(
  (runnable: RunnableLike) => {
    const sink = Consumer.takeLast(1);
    runnable[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);

    return sink[CollectionEnumeratorLike_peek];
  },
) as Runnable.Signature["last"];

export default Runnable_last;
