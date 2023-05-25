import type * as Observable from "../../Observable.js";
import { identity, none, pipeLazy, returns } from "../../functions.js";
import Observable_generate from "./Observable.generate.js";
import Observable_withCurrentTime from "./Observable.withCurrentTime.js";

const Observable_currentTime: Observable.Signature["currentTime"] = pipeLazy(
  Observable_generate<unknown>(identity, returns(none)),
  Observable_withCurrentTime(identity),
);

export default Observable_currentTime;
