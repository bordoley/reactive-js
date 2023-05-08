import { Container, EnumeratorContainer } from "../../../core.js";
import Container_pick from "../../../core/Container/__internal__/Container.pick.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_pick: Container.TypeClass<EnumeratorContainer>["pick"] =
  /*@__PURE__*/ Container_pick(Enumerator_map);

export default Enumerator_pick;
