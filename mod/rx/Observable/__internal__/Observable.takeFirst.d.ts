import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableTakeFirst = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
