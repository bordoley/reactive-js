import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableTakeLast = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeLast: ObservableTakeLast;
export default Observable_takeLast;
