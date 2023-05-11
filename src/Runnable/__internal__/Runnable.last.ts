import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import type * as Runnable from "../../Runnable.js";
import { Optional, none, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_last: Runnable.Signature["last"] =
  <T>() =>
  (src: RunnableLike<T>) => {
    let result: Optional<T> = none;

    pipe(
      src,
      Observable_forEach((next: T) => {
        result = next;
      }),
      Runnable_run(),
    );
    return result;
  };

export default Runnable_last;
