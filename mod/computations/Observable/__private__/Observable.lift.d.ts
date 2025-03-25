import { ObservableLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
declare const Observable_lift: <TIn, TOut>(operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>) => (source: ObservableLike<TIn>) => ObservableLike<TOut>;
export default Observable_lift;
