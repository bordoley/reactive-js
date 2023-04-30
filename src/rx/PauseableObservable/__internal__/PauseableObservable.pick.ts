import { Pick } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import { PauseableObservableContainer } from "../../../rx.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: Pick<PauseableObservableContainer>["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
