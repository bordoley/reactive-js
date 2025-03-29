import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] = returns(
  (src: RunnableLike) => {
    const consumer = Consumer.create();
    src[RunnableLike_eval](consumer);
    Disposable.raiseIfDisposedWithError(consumer);

    return Array.from(consumer);
  },
) as Runnable.Signature["toReadonlyArray"];

export default Runnable_toReadonlyArray;
