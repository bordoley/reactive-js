import type * as Observable from "../../Observable.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";

const Observable_mapWithKey: Observable.Signature["mapWithKey"] = (<TA, TB>(
    mapper: Function2<TA, number, TB>,
  ) =>
  (obs: ObservableLike<TA>) =>
    pipe(
      obs,
      Observable_scan(
        ([cnt, _], next: TA) => tuple(cnt + 1, next),
        () => tuple(-1, none as TA),
      ),
      Observable_map(([cnt, v]: Tuple2<number, TA>) => mapper(v, cnt)),
    )) as Observable.Signature["mapWithKey"];

export default Observable_mapWithKey;
