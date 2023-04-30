import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableRepeatOrRetry = <C extends ObservableContainerLike, T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
