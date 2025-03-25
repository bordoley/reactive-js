import { Tuple2 } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<Tuple2<T, T>>) => LiftedOperatorLike<T>;
