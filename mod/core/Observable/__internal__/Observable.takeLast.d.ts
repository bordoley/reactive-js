import { Containers, ObservableContainer } from "../../../core.js";
type ObservableTakeLast = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeLast: ObservableTakeLast;
export default Observable_takeLast;
