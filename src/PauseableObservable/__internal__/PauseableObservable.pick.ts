import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: PauseableObservable.Signature["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
