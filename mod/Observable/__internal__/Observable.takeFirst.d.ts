import { Container, ObservableContainer } from "../../containers.js";
type ObservableTakeFirst = <C extends ObservableContainer.Type, T>(options?: {
    readonly count?: number;
}) => Container.Operator<C, T, T>;
declare const Observable_takeFirst: ObservableTakeFirst;
export default Observable_takeFirst;
