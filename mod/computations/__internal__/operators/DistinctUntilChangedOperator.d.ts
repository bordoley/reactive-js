import { Equality } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedSinkLike<TSubscription, T>, options?: {
    readonly equality?: Equality<T>;
}) => LiftedSinkLike<TSubscription, T>;
