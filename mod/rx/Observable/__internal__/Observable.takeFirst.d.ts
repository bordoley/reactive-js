import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableTakeFirst = <C extends ObservableContainerLike, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
