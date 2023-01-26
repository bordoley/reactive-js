import {
  Lift,
  TInteractive,
  interactive,
} from "../../../containers/__internal__/containers.internal";
import { EnumerableLike } from "../../../ix";
import Enumerable$lift from "./Enumerable.lift";

const Enumerable$liftT: Lift<EnumerableLike, TInteractive> = {
  lift: Enumerable$lift,
  variance: interactive,
};

export default Enumerable$liftT;
