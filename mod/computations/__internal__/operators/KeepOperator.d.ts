import { Predicate } from "../../../functions.js";
import { DelegatingLiftedOperatorLike } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, predicate: Predicate<T>) => DelegatingLiftedOperatorLike<T>;
