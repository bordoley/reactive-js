import { Optional, Predicate } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedOperatorLike<TSubscription, T>, predicate: Predicate<T>, options: Optional<{
    readonly inclusive?: boolean;
}>) => LiftedOperatorLike<TSubscription, T>;
