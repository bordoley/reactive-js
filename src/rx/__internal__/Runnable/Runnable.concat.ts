import { Concat } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable$concatAll from "./Runnable.concatAll";

const Runnable$concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) => pipe(runnables, ReadonlyArray$toRunnable(), Runnable$concatAll());

export default Runnable$concat;
