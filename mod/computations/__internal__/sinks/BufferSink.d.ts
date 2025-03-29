import { Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>, options: Optional<{
    count?: number;
}>) => LiftedSinkLike<TSubscription, T>;
