import { Optional, Predicate } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedSinkLike<TSubscription, T>, predicate: Predicate<T>, options: Optional<{
    readonly inclusive?: boolean;
}>) => LiftedSinkLike<TSubscription, T>;
