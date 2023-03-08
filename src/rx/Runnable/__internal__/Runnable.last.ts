import { Last } from "../../../containers.js";
import { Optional, none, pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_last: Last<RunnableLike>["last"] =
  <T>() =>
  (src: RunnableLike<T>) => {
    let result: Optional<T> = none;

    pipe(
      src,
      Observable_forEach<RunnableLike, T>(next => {
        result = next;
      }),
      Runnable_run(),
    );
    return result;
  };

export default Runnable_last;
