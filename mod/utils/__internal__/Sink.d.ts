import { LiftedOperatorLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1 } from "../../functions.js";
import { SinkLike } from "../../utils.js";
export declare const toOperator: <T>() => Function1<SinkLike<T>, LiftedOperatorLike<T>>;
