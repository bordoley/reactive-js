import { Function2, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithCurrentTimeObserver from "../../Observer/__private__/Observer.createWithCurrentTimeObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_withCurrentTime: Observable.Signature["withCurrentTime"] = <
  TA,
  TB,
>(
  selector: Function2<number, TA, TB>,
) =>
  pipe(
    Observer_createWithCurrentTimeObserver,
    partial(selector),
    Observable_liftPure,
  );

export default Observable_withCurrentTime;
