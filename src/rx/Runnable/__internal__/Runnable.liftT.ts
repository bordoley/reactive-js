import {
  Lift,
  TReactive,
} from "../../../containers/__internal__/containers.internal.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_liftT: Lift<RunnableLike, TReactive> = {
  lift: Runnable_lift,
};

export default Runnable_liftT;
