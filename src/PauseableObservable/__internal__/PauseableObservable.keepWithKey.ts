import type * as PauseableObservable from "../../PauseableObservable.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { PauseableObservableLike } from "../../types.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";
import PauseableObservable_scan from "./PauseableObservable.scan.js";

const PauseableObservable_keepWithKey: PauseableObservable.Signature["keepWithKey"] =
  (<T>(predicate: Function2<T, number, boolean>) =>
    (obs: PauseableObservableLike<T>) =>
      pipe(
        obs,
        PauseableObservable_scan(
          ([cnt, _], next: T) => tuple(cnt + 1, next),
          () => tuple(-1, none as T),
        ),
        PauseableObservable_keep(([cnt, v]: Tuple2<number, T>) =>
          predicate(v, cnt),
        ),
      )) as PauseableObservable.Signature["keepWithKey"];

export default PauseableObservable_keepWithKey;
