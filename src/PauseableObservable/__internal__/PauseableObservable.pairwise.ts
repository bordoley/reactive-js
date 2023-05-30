import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { Tuple2, pipe, returns } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_pairwise: PauseableObservable.Signature["pairwise"] =
  /*@__PURE__*/ (<T>() =>
    pipe(
      Observer_createPairwiseObserver,
      PauseableObservable_lift<T, Tuple2<T, T>>,
      returns,
    ))();

export default PauseableObservable_pairwise;
