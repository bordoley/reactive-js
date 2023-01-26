import { Concat } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable_concatAll from "./Runnable.concatAll";

const Runnable_concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) => pipe(runnables, ReadonlyArray_toRunnable(), Runnable_concatAll());

export default Runnable_concat;
