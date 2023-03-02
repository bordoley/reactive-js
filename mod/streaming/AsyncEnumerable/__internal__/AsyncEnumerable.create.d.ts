import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
declare const AsyncEnumerable_create: <T>(op1: ContainerOperator<ObservableLike, void, T>) => AsyncEnumerableLike<T>;
export default AsyncEnumerable_create;
