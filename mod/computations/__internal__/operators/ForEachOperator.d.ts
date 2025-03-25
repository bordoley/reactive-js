import { SideEffect1 } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, sideEffect: SideEffect1<T>) => LiftedOperatorLike<T>;
