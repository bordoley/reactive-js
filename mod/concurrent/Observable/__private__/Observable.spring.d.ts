declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => import("../../../concurrent.js").PureSynchronousObservableLike<number> & import("../../../concurrent.js").ObservableLike<number>;
export default Observable_spring;
