import { RunnableLike } from "../../../rx.js";
declare const Observable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => RunnableLike<number>;
export default Observable_spring;
