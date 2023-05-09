import { Containers, ObservableContainer } from "../../containers.js";
type ObservableTakeLast = <C extends ObservableContainer.Type, T>(options?: {
    readonly count?: number;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeLast: ObservableTakeLast;
export default Observable_takeLast;
