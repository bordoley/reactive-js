import { RunnableLike } from "../../../computations.js";
import { Function1, Optional, compose } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_last from "./Runnable.last.js";
import Runnable_takeFirst from "./Runnable.takeFirst.js";

const Runnable_first: Runnable.Signature["first"] = <T>(options?: {
  readonly maxMicroTaskTicks?: number;
}): Function1<RunnableLike<T>, Optional<T>> =>
  compose(Runnable_takeFirst(), Runnable_last(options));

export default Runnable_first;
