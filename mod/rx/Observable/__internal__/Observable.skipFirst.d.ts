import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableSkipFirst = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_skipFirst: ObservableSkipFirst;
export default Observable_skipFirst;
