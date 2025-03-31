import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, TA, TB>(delegate: LiftedSinkLike<TSubscription, TB>, selector: Function1<TA, TB>) => LiftedSinkLike<TSubscription, TA>;
