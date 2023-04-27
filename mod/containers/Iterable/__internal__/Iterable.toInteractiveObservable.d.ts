import { IterableLike } from "../../../containers.js";
import { ToInteractiveObservable } from "../../../rx.js";
declare const Iterable_toInteractiveObservable: ToInteractiveObservable<IterableLike, {
    readonly delay?: number;
}>["toInteractiveObservable"];
export default Iterable_toInteractiveObservable;
