import { ContainerOperator } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { Exception } from "../../../util.mjs";
declare const ObservableLike__repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Exception) => boolean) => ContainerOperator<ObservableLike, T, T>;
export { ObservableLike__repeatOrRetry as default };
