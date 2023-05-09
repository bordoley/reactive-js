import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import { Optional, none, pipe } from "../../functions.js";
import {
  RunnableContainer,
  RunnableContainers,
  RunnableLike,
} from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_last: RunnableContainers.TypeClass<RunnableContainer>["last"] =
  <T>() =>
  (src: RunnableLike<T>) => {
    let result: Optional<T> = none;

    pipe(
      src,
      Observable_forEach<RunnableContainer, T>(next => {
        result = next;
      }),
      Runnable_run(),
    );
    return result;
  };

export default Runnable_last;
