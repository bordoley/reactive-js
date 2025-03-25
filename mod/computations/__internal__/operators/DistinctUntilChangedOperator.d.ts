import { Equality } from "../../../functions.js";
import { DelegatingLiftedOperatorLike } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <T>(delegate: LiftedOperatorLike<T>, options?: {
    readonly equality?: Equality<T>;
}) => DelegatingLiftedOperatorLike<T>;
