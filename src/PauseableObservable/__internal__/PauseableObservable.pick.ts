import Container_pick from "../../Container/__internal__/Container.pick.js";
import { Containers, PauseableObservableContainer } from "../../containers.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: Containers.TypeClass<PauseableObservableContainer>["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
