import { Optional } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, T>(delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>, options: Optional<{
    count?: number;
}>) => LiftedSinkLike<TSubscription, T>;
