import { BroadcasterLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
declare const Broadcaster_lift: <TIn, TOut>(operator: Function1<LiftedSinkLike<EventListenerLike, TOut>, LiftedSinkLike<EventListenerLike, TIn>>) => (source: BroadcasterLike<TIn>) => BroadcasterLike<TOut>;
export default Broadcaster_lift;
