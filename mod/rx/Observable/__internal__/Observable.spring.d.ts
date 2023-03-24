import { RunnableLike } from "../../../rx.js";
declare const Observable_spring: (start: number, finish: number, options?: {
    stiffness?: number;
    damping?: number;
    precision?: number;
}) => RunnableLike<number>;
export default Observable_spring;
