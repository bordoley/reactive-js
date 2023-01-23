import { ContainerOperator } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Error) => boolean) => ContainerOperator<ObservableLike, T, T>;
export { ObservableLike__repeatOrRetry as default };
