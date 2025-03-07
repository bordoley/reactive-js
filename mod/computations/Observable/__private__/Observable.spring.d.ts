declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => import("../../../computations.js").PureSynchronousObservableLike<number> & import("../../../computations.js").ObservableLike<number>;
export default Observable_spring;
