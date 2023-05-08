import { EventListenerLike, EventSourceLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const EventSource_lift: <TA, TB>(operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>) => Function1<EventSourceLike<TA>, EventSourceLike<TB>>;
export default EventSource_lift;
