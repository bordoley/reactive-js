import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_retry: (predicate?: ((count: number, error: unknown) => boolean) | undefined) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { Observable_retry as default };
