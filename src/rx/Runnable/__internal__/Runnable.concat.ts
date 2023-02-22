import { Concat } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const Runnable_concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) => pipe(runnables, ReadonlyArray_toRunnable(), Runnable_concatAll());

export default Runnable_concat;
