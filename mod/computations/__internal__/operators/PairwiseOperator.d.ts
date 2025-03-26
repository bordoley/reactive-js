import { Tuple2 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedOperatorLike<TSubscription, Tuple2<T, T>>) => LiftedOperatorLike<TSubscription, T>;
