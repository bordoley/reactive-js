import { Function1 } from "../../../functions.js";
import { DelegatingLiftedOperatorLike } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TA, TB>(delegate: LiftedOperatorLike<TB>, selector: Function1<TA, TB>) => DelegatingLiftedOperatorLike<TA, TB>;
