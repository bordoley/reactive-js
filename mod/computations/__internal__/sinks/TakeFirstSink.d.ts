import { Optional } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, T>(delegate: LiftedSinkLike<TSubscription, T>, takeCount: Optional<number>) => LiftedSinkLike<TSubscription, T>;
