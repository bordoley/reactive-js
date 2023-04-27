import { ReadonlyArrayLike } from "../../../containers.js";
import { ToInteractiveObservable } from "../../../rx.js";
declare const ReadonlyArray_toInteractiveObservable: ToInteractiveObservable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
}>["toInteractiveObservable"];
export default ReadonlyArray_toInteractiveObservable;
