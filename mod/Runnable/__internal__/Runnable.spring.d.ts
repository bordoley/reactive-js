import { RunnableLike } from "../../types.js";
declare const Runnable_spring: (options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
}) => RunnableLike<number>;
export default Runnable_spring;
