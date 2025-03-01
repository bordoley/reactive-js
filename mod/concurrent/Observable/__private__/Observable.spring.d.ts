import { PureSynchronousObservableLike } from "../../../concurrent.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => PureSynchronousObservableLike<number> & Pick<PureSynchronousObservableLike<number> & Pick<PureSynchronousObservableLike<unknown>, typeof import("../../../computations.js").ComputationLike_isPure | typeof import("../../../computations.js").ComputationLike_isDeferred | typeof import("../../../computations.js").ComputationLike_isSynchronous | typeof import("../../../computations.js").ComputationLike_isInteractive>, typeof import("../../../computations.js").ComputationLike_isPure | typeof import("../../../computations.js").ComputationLike_isDeferred | typeof import("../../../computations.js").ComputationLike_isSynchronous | typeof import("../../../computations.js").ComputationLike_isInteractive>;
export default Observable_spring;
