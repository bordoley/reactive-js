import { identity, none, pipe, returns } from "../../../functions.js";
import { RunnableContainer, RunnableLike } from "../../../rx.js";
import Observable_generate from "./Observable.generate.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";

const Observable_currentTime = (options?: {
  readonly delay?: number;
  readonly delayStart?: boolean;
}): RunnableLike<number> =>
  pipe(
    Observable_generate<unknown>(identity, returns(none), options),
    Observable_withCurrentTime<RunnableContainer, unknown, number>(identity),
  );

export default Observable_currentTime;
