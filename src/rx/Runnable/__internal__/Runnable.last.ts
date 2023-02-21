import { Function1, Optional, none, pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_forEach from "./Runnable.forEach.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_last =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

    pipe(
      src,
      Runnable_forEach(next => {
        result = next;
      }),
      Runnable_run(),
    );
    return result;
  };

export default Runnable_last;
