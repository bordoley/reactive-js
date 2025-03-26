import { Factory, Reducer } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T, TAcc>(delegate: LiftedOperatorLike<TSubscription, TAcc>, selector: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => LiftedOperatorLike<TSubscription, T>;
