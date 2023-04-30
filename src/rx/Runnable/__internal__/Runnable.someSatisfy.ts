import { EverySatisfy } from "../../../containers.js";
import { Predicate, isFalse, pipe } from "../../../functions.js";
import { RunnableContainerLike, RunnableLike } from "../../../rx.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_someSatisfy: EverySatisfy<RunnableContainerLike>["everySatisfy"] =

    <T>(predicate: Predicate<T>) =>
    (runnable: RunnableLike<T>) => {
      let result = false;

      pipe(
        runnable,
        Observable_map<RunnableContainerLike, T, boolean>(predicate),
        Observable_forEach<RunnableContainerLike, boolean>(next => {
          result = next;
        }),
        Observable_takeWhile<RunnableContainerLike, boolean>(isFalse),
        Runnable_run(),
      );

      return result;
    };

export default Runnable_someSatisfy;
