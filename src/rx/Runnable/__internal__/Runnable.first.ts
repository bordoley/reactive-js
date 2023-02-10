import { Function1, Optional, none, pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable_forEach from "./Runnable.forEach";
import Runnable_run from "./Runnable.run";
import Runnable_takeFirst from "./Runnable.takeFirst";

const Runnable_first =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

    pipe(
      src,
      Runnable_takeFirst(),
      Runnable_forEach(next => {
        result = next;
      }),
      Runnable_run(),
    );
    return result;
  };

export default Runnable_first;
