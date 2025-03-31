import { Factory, Reducer } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, T, TAcc>(delegate: LiftedSinkLike<TSubscription, TAcc>, selector: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => LiftedSinkLike<TSubscription, T>;
