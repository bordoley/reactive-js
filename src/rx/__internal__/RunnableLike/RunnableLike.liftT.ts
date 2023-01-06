import {
  Lift,
  TReactive,
  reactive,
} from "../../../containers/__internal__/containers.internal";
import { RunnableLike } from "../../../rx";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__liftT: Lift<RunnableLike, TReactive> = {
  lift: RunnableLike__lift,
  variance: reactive,
};

export default RunnableLike__liftT;
