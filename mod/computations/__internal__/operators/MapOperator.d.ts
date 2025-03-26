import { Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, TA, TB>(delegate: LiftedOperatorLike<TSubscription, TB>, selector: Function1<TA, TB>) => LiftedOperatorLike<TSubscription, TA>;
