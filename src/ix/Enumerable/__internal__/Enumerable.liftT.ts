import { Lift } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_liftT: Lift<EnumerableLike> = {
  lift: Enumerable_lift,
};

export default Enumerable_liftT;
