import { BroadcasterLike } from "../../../computations.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
export declare const createTakeUntilOperator: <T>(delegate: LiftedOperatorLike<EventListenerLike, T>, notifier: BroadcasterLike) => LiftedOperatorLike<EventListenerLike, T>;
declare const Broadcaster_takeUntil: Broadcaster.Signature["takeUntil"];
export default Broadcaster_takeUntil;
