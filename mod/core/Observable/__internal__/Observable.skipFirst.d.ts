import { Container, ObservableContainer } from "../../../core.js";
type ObservableSkipFirst = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => Container.Operator<C, T, T>;
declare const Observable_skipFirst: ObservableSkipFirst;
export default Observable_skipFirst;
