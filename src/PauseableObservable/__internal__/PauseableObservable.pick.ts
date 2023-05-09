import Container_pick from "../../Container/__internal__/Container.pick.js";
import { PauseableObservableContainer } from "../../containers.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: PauseableObservableContainer.TypeClass["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
