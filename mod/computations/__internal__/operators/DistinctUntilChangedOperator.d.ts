import { Equality } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, options?: {
    readonly equality?: Equality<T>;
}) => LiftedOperatorLike<T>;
