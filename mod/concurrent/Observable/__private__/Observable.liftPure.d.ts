declare const Observable_liftPure: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../concurrent.js").ObserverLike<TB>, import("../../../concurrent.js").ObserverLike<TA>>) => import("../../../computations.js").ComputationOperator<import("../../Observable.js").Computation, TA, TB>;
export default Observable_liftPure;
