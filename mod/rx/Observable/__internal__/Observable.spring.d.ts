import { ContainerOperator } from "../../../containers.js";
import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_spring: (initialValue: Factory<number>, options?: {
    stiffness?: number;
    damping?: number;
    precision?: number;
}) => ContainerOperator<ObservableLike, number, number>;
export default Observable_spring;
