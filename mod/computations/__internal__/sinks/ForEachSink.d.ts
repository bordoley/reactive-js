import { SideEffect1 } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, T>(delegate: LiftedSinkLike<TSubscription, T>, sideEffect: SideEffect1<T>) => LiftedSinkLike<TSubscription, T>;
