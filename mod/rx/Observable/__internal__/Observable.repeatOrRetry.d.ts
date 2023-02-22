import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<ObservableLike, T, T>;
export default Observable_repeatOrRetry;
