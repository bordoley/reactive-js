import { Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, TA, TB>(delegate: LiftedSinkLike<TSubscription, TB>, selector: Function1<TA, TB>) => LiftedSinkLike<TSubscription, TA>;
