import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike>(delegate: LiftedOperatorLike<TSubscription, ArrayBuffer>) => LiftedOperatorLike<TSubscription, string>;
