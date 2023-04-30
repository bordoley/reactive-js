import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableRepeatOrRetry = <C extends ObservableContainer, T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
