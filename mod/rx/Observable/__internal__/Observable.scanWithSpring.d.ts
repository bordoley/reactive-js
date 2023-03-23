import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_scanWithSpring: (initialValue: number, options?: {
    stiffness?: number;
    damping?: number;
    precision?: number;
}) => ContainerOperator<ObservableLike, number, number>;
export default Observable_scanWithSpring;
