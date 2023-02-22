import { Throws } from "../../../containers.js";
import Container_throws from "../../../containers/Container/__internal__/Container.throws.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_compute from "./Enumerable.compute.js";

const Enumerable_throws: Throws<EnumerableLike>["throws"] =
  /*@__PURE__*/ Container_throws<EnumerableLike>(Enumerable_compute);

export default Enumerable_throws;
