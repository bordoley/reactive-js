import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { RunnableLike } from "../../../rx";
import Runnable_lift from "./Runnable.lift";

const Runnable_liftT: Lift<RunnableLike, TReactive> = {
  lift: Runnable_lift,
  variance: reactive,
};

export default Runnable_liftT;
