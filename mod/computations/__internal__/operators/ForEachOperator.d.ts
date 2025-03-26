import { SideEffect1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedOperatorLike<TSubscription, T>, sideEffect: SideEffect1<T>) => LiftedOperatorLike<TSubscription, T>;
