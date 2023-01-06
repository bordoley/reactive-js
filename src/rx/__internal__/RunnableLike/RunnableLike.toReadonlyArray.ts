import { ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import RunnableLike__forEach from "./RunnableLike.forEach";
import RunnableLike__run from "./RunnableLike.run";

const RunnableLike__toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>() =>
    (runnable: RunnableLike<T>) => {
      const result: T[] = [];
      pipe(
        runnable,
        RunnableLike__forEach<T>(x => result.push(x)),
        RunnableLike__run(),
      );
      return result;
    };

export default RunnableLike__toReadonlyArray;
