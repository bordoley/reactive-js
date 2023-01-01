import {
  Lift,
  TInteractive,
  interactive,
} from "../../../containers/__internal__/containers.internal";
import { EnumerableLike } from "../../../ix";
import EnumerableLike__lift from "./EnumerableLike.lift";

const EnumerableLike__liftT: Lift<EnumerableLike, TInteractive> = {
  lift: EnumerableLike__lift,
  variance: interactive,
};

export default EnumerableLike__liftT;
