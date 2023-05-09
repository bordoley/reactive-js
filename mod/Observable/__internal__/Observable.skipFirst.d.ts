import { Container, ObservableContainer } from "../../containers.js";
type ObservableSkipFirst = <C extends ObservableContainer.Type, T>(options?: {
    readonly count?: number;
}) => Container.Operator<C, T, T>;
declare const Observable_skipFirst: ObservableSkipFirst;
export default Observable_skipFirst;
