import { Container, PauseableObservableContainer } from "../../../core.js";
import Container_pick from "../../../core/Container/__internal__/Container.pick.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: Container.TypeClass<PauseableObservableContainer>["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
