import { ToReadonlyArray } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_forEach from "./Runnable.forEach.js";
import Runnable_run from "./Runnable.run.js";

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
