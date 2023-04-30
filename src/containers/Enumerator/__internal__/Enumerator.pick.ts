import { EnumeratorContainerLike, Pick } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_pick: Pick<EnumeratorContainerLike>["pick"] =
  /*@__PURE__*/ Container_pick(Enumerator_map);

export default Enumerator_pick;
