import type * as Observable from "../../Observable.js";
import Observer_createWithLatestObserver from "../../Observer/__internal__/Observer.createWithLatestObserver.js";

import { Function2, partial, pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";

const Observable_withLatestFrom: Observable.Signature["withLastestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) =>
  pipe(
    Observer_createWithLatestObserver,
    partial(other, selector),
    Observable_liftUpperBoundedBy(other),
  )) as Observable.Signature["withLastestFrom"];

export default Observable_withLatestFrom;
