declare const Observable_liftPure: <TA, TB>(operator: import("../../../functions.js").Function1<import("../../../concurrent.js").ObserverLike<TB>, import("../../../concurrent.js").ObserverLike<TA>>) => import("../../Observable.js").PureObservableOperator<TA, TB, import("../../../concurrent.js").ObservableLike<TA>>;
export default Observable_liftPure;
