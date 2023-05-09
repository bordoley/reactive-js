import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { RunnableContainer, RunnableContainers } from "../../containers.js";
import { Predicate, isFalse, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_someSatisfy: RunnableContainers.TypeClass<RunnableContainer>["everySatisfy"] =

    <T>(predicate: Predicate<T>) =>
    (runnable: RunnableLike<T>) => {
      let result = false;

      pipe(
        runnable,
        Observable_map<RunnableContainer, T, boolean>(predicate),
        Observable_forEach<RunnableContainer, boolean>(next => {
          result = next;
        }),
        Observable_takeWhile<RunnableContainer, boolean>(isFalse),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_someSatisfy;
