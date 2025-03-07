declare const Observable_liftPure: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../computations.js").ObserverLike<TB>, import("../../../computations.js").ObserverLike<TA>>) => import("../../../computations.js").StatelessComputationOperator<import("../../Observable.js").Computation, TA, TB>;
export default Observable_liftPure;
