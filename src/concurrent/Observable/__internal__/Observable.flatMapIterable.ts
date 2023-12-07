import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import { Function1, compose, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromIterable from "./Observable.fromIterable.js";

const Observable_flatMapIterable: Observable.Signature["flatMapIterable"] = (<
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => {
  const mapper = compose(selector, Observable_fromIterable<TB>());

  return (observable: ObservableLike<TA>) =>
    pipe(
      observable,
      Observable_concatMap(mapper, {
        ...observable,
        [ObservableLike_isPure]: false,
      }),
    );
}) as Observable.Signature["flatMapIterable"];

export default Observable_flatMapIterable;
