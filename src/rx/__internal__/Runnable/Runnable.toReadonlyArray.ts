import { ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable$forEach from "./Runnable.forEach";
import Runnable$run from "./Runnable.run";

const Runnable$toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>() =>
    (runnable: RunnableLike<T>) => {
      const result: T[] = [];
      pipe(
        runnable,
        Runnable$forEach<T>(x => result.push(x)),
        Runnable$run(),
      );
      return result;
    };

export default Runnable$toReadonlyArray;
