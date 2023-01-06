import { Function1, Optional, none, pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import RunnableLike__forEach from "./RunnableLike.forEach";
import RunnableLike__run from "./RunnableLike.run";
import RunnableLike__takeFirst from "./RunnableLike.takeFirst";

const RunnableLike__first =
  <T>(): Function1<RunnableLike<T>, Optional<T>> =>
  src => {
    let result: Optional<T> = none;

    pipe(
      src,
      RunnableLike__takeFirst(),
      RunnableLike__forEach(next => {
        result = next;
      }),
      RunnableLike__run(),
    );
    return result;
  };

export default RunnableLike__first;
