import { Function1, Optional, none, pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable$forEach from "./Runnable.forEach";
import Runnable$run from "./Runnable.run";

const Runnable$last =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

    pipe(
      src,
      Runnable$forEach(next => {
        result = next;
      }),
      Runnable$run(),
    );
    return result;
  };

export default Runnable$last;
