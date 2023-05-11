import { RunnableLike } from "../../types.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => RunnableLike<number>;
export default Observable_spring;
