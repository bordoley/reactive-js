import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { Predicate } from "../../../functions.js";
declare const Observable_repeat: (predicate?: Predicate<number> | number) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { Observable_repeat as default };
