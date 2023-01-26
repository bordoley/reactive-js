import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { RunnableLike } from "../../../rx";
import Runnable$lift from "./Runnable.lift";

const Runnable$liftT: Lift<RunnableLike, TReactive> = {
  lift: Runnable$lift,
  variance: reactive,
};

export default Runnable$liftT;
