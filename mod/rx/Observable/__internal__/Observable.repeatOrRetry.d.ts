import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableRepeatOrRetry = <C extends ObservableLike, T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
