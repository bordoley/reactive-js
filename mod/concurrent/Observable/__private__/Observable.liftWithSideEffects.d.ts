declare const Observable_liftWithSideEffects: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../concurrent.js").ObserverLike<TB>, import("../../../concurrent.js").ObserverLike<TA>>) => import("../../../computations.js").ComputationOperatorWithSideEffects<import("../../Observable.js").Computation, TA, TB>;
export default Observable_liftWithSideEffects;
