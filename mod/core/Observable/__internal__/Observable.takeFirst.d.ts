import { Container, ObservableContainer } from "../../../core.js";
type ObservableTakeFirst = <C extends ObservableContainer, T>(options?: {
    readonly count?: number;
}) => Container.Operator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
