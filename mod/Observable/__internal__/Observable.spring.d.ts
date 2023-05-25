import { RunnableWithSideEffectsLike } from "../../types.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => RunnableWithSideEffectsLike<number>;
export default Observable_spring;
