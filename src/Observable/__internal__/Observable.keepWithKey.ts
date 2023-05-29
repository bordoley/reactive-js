import type * as Observable from "../../Observable.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_keep from "./Observable.keep.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";

const Observable_keepWithKey: Observable.Signature["keepWithKey"] = (<T>(
    predicate: Function2<T, number, boolean>,
  ) =>
  (obs: ObservableLike<T>) =>
    pipe(
      obs,
      Observable_scan(
        ([cnt, _], next: T) => tuple(cnt + 1, next),
        () => tuple(-1, none as T),
      ),
      Observable_keep(([cnt, v]: Tuple2<number, T>) => predicate(v, cnt)),
      Observable_pick<Tuple2<number, T>, number>(1),
    )) as Observable.Signature["keepWithKey"];

export default Observable_keepWithKey;
