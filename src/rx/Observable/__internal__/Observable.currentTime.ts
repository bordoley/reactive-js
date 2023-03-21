import { identity, none, pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_generate from "./Observable.generate.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";

const Observable_currentTime = (): ObservableLike<number> =>
  pipe(
    Observable_generate<unknown>(identity, returns(none)),
    Observable_withCurrentTime<ObservableLike, unknown, number>(identity),
  );

export default Observable_currentTime;
