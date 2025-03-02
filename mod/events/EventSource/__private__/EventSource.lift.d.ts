import { ComputationOperator } from "../../../computations.js";
import { EventListenerLike } from "../../../events.js";
import { Function1 } from "../../../functions.js";
import type { EventSourceComputation } from "../../EventSource.js";
interface EventSourceLift {
    lift<TA, TB>(operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>): ComputationOperator<EventSourceComputation, TA, TB>;
}
declare const EventSource_lift: EventSourceLift["lift"];
export default EventSource_lift;
