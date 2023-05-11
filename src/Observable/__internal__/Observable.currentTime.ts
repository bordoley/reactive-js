import type * as Observable from "../../Observable.js";
import { identity, none, pipe, returns } from "../../functions.js";
import Observable_generate from "./Observable.generate.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";

const Observable_currentTime: Observable.Signature["currentTime"] = options =>
  pipe(
    Observable_generate<unknown>(identity, returns(none), options),
    Observable_withCurrentTime(identity),
  );

export default Observable_currentTime;
