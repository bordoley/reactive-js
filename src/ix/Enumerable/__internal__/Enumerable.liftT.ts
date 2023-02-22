import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_liftT: Lift<EnumerableLike, TInteractive> = {
  lift: Enumerable_lift,
};

export default Enumerable_liftT;
