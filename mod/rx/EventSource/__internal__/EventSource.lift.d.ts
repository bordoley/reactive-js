import { Function1 } from "../../../functions.js";
import { EventListenerLike, EventSourceLike } from "../../../rx.js";
declare const EventSource_lift: <TA, TB>(operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>) => Function1<EventSourceLike<TA>, EventSourceLike<TB>>;
export default EventSource_lift;
