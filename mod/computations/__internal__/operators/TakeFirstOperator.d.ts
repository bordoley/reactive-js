import { Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedOperatorLike<TSubscription, T>, takeCount: Optional<number>) => LiftedOperatorLike<TSubscription, T>;
