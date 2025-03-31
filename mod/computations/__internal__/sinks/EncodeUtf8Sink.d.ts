import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike>(delegate: LiftedSinkLike<TSubscription, ArrayBuffer>) => LiftedSinkLike<TSubscription, string>;
