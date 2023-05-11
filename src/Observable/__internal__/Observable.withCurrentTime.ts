import type * as Observable from "../../Observable.js";
import Observer_createWithCurrentTimeObserver from "../../Observer/__internal__/Observer.createWithCurrentTimeObserver.js";
import { Function2, partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_withCurrentTime: Observable.Signature["withCurrentTime"] = <
  TA,
  TB,
>(
  selector: Function2<number, TA, TB>,
) =>
  pipe(
    Observer_createWithCurrentTimeObserver,
    partial(selector),
    Observable_liftSource,
  );

export default Observable_withCurrentTime;
