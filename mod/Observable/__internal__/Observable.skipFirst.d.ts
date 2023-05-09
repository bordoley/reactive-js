import { Containers, ObservableContainer } from "../../containers.js";
type ObservableSkipFirst = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => Containers.Operator<C, T, T>;
declare const Observable_skipFirst: ObservableSkipFirst;
export default Observable_skipFirst;
