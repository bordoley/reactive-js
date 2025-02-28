import { PureSynchronousObservableLike } from "../../../concurrent.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => PureSynchronousObservableLike<number>;
export default Observable_spring;
