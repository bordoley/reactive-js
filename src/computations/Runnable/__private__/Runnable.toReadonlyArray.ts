import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] = returns(
  (src: RunnableLike) => {
    const buffer: unknown[] = [];
    const sink = Sink.collect(buffer);

    src[RunnableLike_eval](sink);
    Disposable.raiseIfDisposedWithError(sink);

    return buffer;
  },
) as Runnable.Signature["toReadonlyArray"];

export default Runnable_toReadonlyArray;
