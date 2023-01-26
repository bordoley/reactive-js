import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<ObservableLike, T, T>;
export { Observable$repeatOrRetry as default };
