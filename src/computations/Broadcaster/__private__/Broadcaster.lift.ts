import { PureComputationOperator } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Source from "../../__internal__/Source.js";

interface BroadcasterLift {
  <TA, TB>(
    operator: Function1<ListenerLike<TB>, ListenerLike<TA>>,
  ): PureComputationOperator<Broadcaster.Computation, TA, TB>;
}

const Broadcaster_lift: BroadcasterLift =
  Source.liftBroadcasting as BroadcasterLift;

export default Broadcaster_lift;
