declare const Observable_liftPureDeferred: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../concurrent.js").ObserverLike<TB>, import("../../../concurrent.js").ObserverLike<TA>>) => import("../../../computations.js").StatefulSynchronousComputationOperator<import("../../Observable.js").Computation, TA, TB>;
export default Observable_liftPureDeferred;
