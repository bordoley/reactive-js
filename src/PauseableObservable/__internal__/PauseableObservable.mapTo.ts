import type * as PauseableObservable from "../../PauseableObservable.js";
import { returns } from "../../functions.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_mapTo: PauseableObservable.Signature["mapTo"] = <T>(
  v: T,
) => PauseableObservable_map(returns(v));

export default PauseableObservable_mapTo;
