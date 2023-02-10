import { Function1, Optional, none, pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable_forEach from "./Runnable.forEach";
import Runnable_run from "./Runnable.run";

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
