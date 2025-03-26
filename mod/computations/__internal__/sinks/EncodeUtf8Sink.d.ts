import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike>(delegate: LiftedSinkLike<TSubscription, ArrayBuffer>) => LiftedSinkLike<TSubscription, string>;
