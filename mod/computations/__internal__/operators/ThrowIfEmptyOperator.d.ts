import { Factory } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, factory: Factory<unknown>) => LiftedOperatorLike<T>;
