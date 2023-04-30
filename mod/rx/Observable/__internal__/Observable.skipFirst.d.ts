import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableSkipFirst = <C extends ObservableContainerLike, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_skipFirst: ObservableSkipFirst;
export default Observable_skipFirst;
