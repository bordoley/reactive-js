import { ContainerOperator } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__retry: (predicate?: ((count: number, error: unknown) => boolean) | undefined) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { ObservableLike__retry as default };
