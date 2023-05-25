import type * as PauseableObservable from "../../PauseableObservable.js";
import { pickUnsafe } from "../../functions.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: PauseableObservable.Signature["pick"] = (
  ...keys: (string | number | symbol)[]
) => PauseableObservable_map(pickUnsafe(...keys));

export default PauseableObservable_pick;
