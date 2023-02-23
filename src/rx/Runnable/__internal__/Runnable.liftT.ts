import { Lift } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_liftT: Lift<RunnableLike> = {
  lift: Runnable_lift,
};

export default Runnable_liftT;
