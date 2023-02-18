import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal";
import { EnumerableLike } from "../../../ix";
import Enumerable_lift from "./Enumerable.lift";

const Enumerable_liftT: Lift<EnumerableLike, TInteractive> = {
  lift: Enumerable_lift,
};

export default Enumerable_liftT;
