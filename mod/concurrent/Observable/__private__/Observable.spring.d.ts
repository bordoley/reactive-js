import { PureRunnableLike } from "../../../concurrent.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => PureRunnableLike<number>;
export default Observable_spring;
