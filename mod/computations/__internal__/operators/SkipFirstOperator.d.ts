import { Optional } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, takeCount: Optional<number>) => LiftedOperatorLike<T>;
