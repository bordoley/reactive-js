import { SideEffect1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T>(delegate: LiftedSinkLike<TSubscription, T>, sideEffect: SideEffect1<T>) => LiftedSinkLike<TSubscription, T>;
