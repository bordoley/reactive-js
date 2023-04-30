import { Pick } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import { PauseableObservableContainerLike } from "../../../rx.js";
import PauseableObservable_map from "./PauseableObservable.map.js";

const PauseableObservable_pick: Pick<PauseableObservableContainerLike>["pick"] =
  /*@__PURE__*/ Container_pick(PauseableObservable_map);

export default PauseableObservable_pick;
