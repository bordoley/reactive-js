import { Function1 } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TA, TB>(delegate: LiftedOperatorLike<TB>, selector: Function1<TA, TB>) => LiftedOperatorLike<TA>;
