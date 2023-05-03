import { Container, EnumeratorContainer } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_pick: Container.Pick<EnumeratorContainer>["pick"] =
  /*@__PURE__*/ Container_pick(Enumerator_map);

export default Enumerator_pick;
