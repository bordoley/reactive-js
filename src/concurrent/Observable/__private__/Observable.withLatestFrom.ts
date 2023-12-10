import { ObservableLike } from "../../../concurrent.js";
import { Function2, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithLatestFromObserver from "../../Observer/__private__/Observer.createWithLatestFromObserver.js";
import Observable_lift from "./Observable.lift.js";

const Observable_withLatestFrom: Observable.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) =>
  pipe(
    Observer_createWithLatestFromObserver,
    partial(other, selector),
    Observable_lift(other),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
