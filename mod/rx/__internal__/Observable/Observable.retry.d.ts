import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$retry: (predicate?: ((count: number, error: unknown) => boolean) | undefined) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { Observable$retry as default };
