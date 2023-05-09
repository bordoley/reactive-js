import { Containers, ObservableContainer } from "../../containers.js";
type ObservableTakeFirst = <C extends ObservableContainer.Type, T>(options?: {
    readonly count?: number;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
