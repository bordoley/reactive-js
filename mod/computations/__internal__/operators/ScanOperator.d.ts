import { Factory, Reducer } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T, TAcc>(delegate: LiftedOperatorLike<TAcc>, selector: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => LiftedOperatorLike<T>;
