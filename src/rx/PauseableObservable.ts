import { Keep, Map, Pick } from "../containers.js";
import { PauseableObservableLike } from "../rx.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";

export const keep: Keep<PauseableObservableLike>["keep"] =
  PauseableObservable_keep;
export const map: Map<PauseableObservableLike>["map"] = PauseableObservable_map;
export const pick: Pick<PauseableObservableLike>["pick"] =
  PauseableObservable_pick;
