import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers.js";
import { Function1, pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>(): Function1<RunnableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach<RunnableLike, T>(next => {
          result.push(next);
        }),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_toReadonlyArray;
