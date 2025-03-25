import { BroadcasterLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
declare const Broadcaster_lift: <TIn, TOut>(operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>) => (source: BroadcasterLike<TIn>) => BroadcasterLike<TOut>;
export default Broadcaster_lift;
