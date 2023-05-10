import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as Enumerator from "../../Enumerator.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_pick: Enumerator.Signature["pick"] =
  /*@__PURE__*/ Container_pick(Enumerator_map);

export default Enumerator_pick;
