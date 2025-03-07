import { EventListenerLike, StatelessComputationOperator } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
interface EventSourceLift {
    lift<TA, TB>(operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>): StatelessComputationOperator<EventSource.Computation, TA, TB>;
}
declare const EventSource_lift: EventSourceLift["lift"];
export default EventSource_lift;
