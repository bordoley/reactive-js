import { ToReadonlyArray } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable_forEach from "./Runnable.forEach";
import Runnable_run from "./Runnable.run";

const Runnable_toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>() =>
    (runnable: RunnableLike<T>) => {
      const result: T[] = [];
      pipe(
        runnable,
        Runnable_forEach<T>(x => result.push(x)),
        Runnable_run(),
      );
      return result;
    };

export default Runnable_toReadonlyArray;
