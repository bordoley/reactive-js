import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const ObservableLike__retry: (predicate?: ((count: number, error: unknown) => boolean) | undefined) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { ObservableLike__retry as default };
