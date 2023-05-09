import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import { RunnableContainer, RunnableContainers } from "../../containers.js";
import { Function1, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: RunnableContainers.TypeClass<RunnableContainer>["toReadonlyArray"] =

    <T>(): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
    observable => {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach<RunnableContainer, T>(next => {
          result.push(next);
        }),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_toReadonlyArray;
