import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableTakeFirst = <C extends ObservableLike, T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
