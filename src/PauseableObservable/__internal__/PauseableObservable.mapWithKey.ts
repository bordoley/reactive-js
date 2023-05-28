import type * as PauseableObservable from "../../PauseableObservable.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { PauseableObservableLike } from "../../types.js";
import PauseableObservable_map from "./PauseableObservable.map.js";
import PauseableObservable_scan from "./PauseableObservable.scan.js";

const PauseableObservable_mapWithKey: PauseableObservable.Signature["mapWithKey"] =
  (<TA, TB>(mapper: Function2<TA, number, TB>) =>
    (obs: PauseableObservableLike<TA>) =>
      pipe(
        obs,
        PauseableObservable_scan(
          ([cnt, _], next: TA) => tuple(cnt + 1, next),
          () => tuple(-1, none as TA),
        ),
        PauseableObservable_map(([cnt, v]: Tuple2<number, TA>) =>
          mapper(v, cnt),
        ),
      )) as PauseableObservable.Signature["mapWithKey"];

export default PauseableObservable_mapWithKey;
