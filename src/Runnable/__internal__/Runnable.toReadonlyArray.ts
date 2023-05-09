import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import { RunnableContainer } from "../../containers.js";
import { Function1, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: RunnableContainer.TypeClass["toReadonlyArray"] =

    <T>(): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
    observable => {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach<RunnableContainer.Type, T>(next => {
          result.push(next);
        }),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_toReadonlyArray;
