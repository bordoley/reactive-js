import { Concat } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import RunnableLike__concatAll from "./RunnableLike.concatAll";

const RunnableLike__concat: Concat<RunnableLike>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) =>
  pipe(runnables, ReadonlyArrayLike__toRunnable(), RunnableLike__concatAll());

export default RunnableLike__concat;
