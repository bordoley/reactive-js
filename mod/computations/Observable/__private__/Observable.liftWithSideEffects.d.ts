declare const Observable_liftWithSideEffects: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../utils.js").ObserverLike<TB>, import("../../../utils.js").ObserverLike<TA>>) => import("../../../computations.js").ComputationOperatorWithSideEffects<import("../../Observable.js").Computation, TA, TB>;
export default Observable_liftWithSideEffects;
