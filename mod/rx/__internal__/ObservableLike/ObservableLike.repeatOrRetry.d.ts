import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const ObservableLike__repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<ObservableLike, T, T>;
export { ObservableLike__repeatOrRetry as default };
