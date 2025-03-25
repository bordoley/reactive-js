import { Optional, Predicate } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, predicate: Predicate<T>, options: Optional<{
    readonly inclusive?: boolean;
}>) => LiftedOperatorLike<T>;
