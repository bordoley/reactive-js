import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { Predicate } from "../../../functions.js";
declare const Observable$repeat: (predicate?: Predicate<number> | number) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { Observable$repeat as default };
