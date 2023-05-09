import Container_pick from "../../Container/__internal__/Container.pick.js";
import { Containers, EnumeratorContainer } from "../../types.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_pick: Containers.TypeClass<EnumeratorContainer>["pick"] =
  /*@__PURE__*/ Container_pick(Enumerator_map);

export default Enumerator_pick;
