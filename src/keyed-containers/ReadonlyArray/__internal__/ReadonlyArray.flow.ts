import { ReadonlyArrayLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import { Flow } from "../../../rx.js";
import Runnable_flow from "../../../rx/Runnable/__internal__/Runnable.flow.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_toFlowable: Flow<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["flow"] = (scheduler, options) =>
  compose(
    ReadonlyArray_toObservable(options),
    Runnable_flow(scheduler, options),
  );

export default ReadonlyArray_toFlowable;
