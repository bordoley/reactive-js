import Observable_generate from "../../Observable/__internal__/Observable.generate.js";
import Observable_withCurrentTime from "../../Observable/__internal__/Observable.withCurrentTime.js";
import { identity, none, pipe, returns } from "../../functions.js";
import { RunnableContainer, RunnableLike } from "../../types.js";

const Runnable_currentTime = (options?: {
  readonly delay?: number;
  readonly delayStart?: boolean;
}): RunnableLike<number> =>
  pipe(
    Observable_generate<unknown>(identity, returns(none), options),
    Observable_withCurrentTime<RunnableContainer, unknown, number>(identity),
  );

export default Runnable_currentTime;
