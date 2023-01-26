import { ReadonlyArrayLike } from "../../../containers.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const ReadonlyArray_toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}>["toRunnableObservable"];
export { ReadonlyArray_toRunnableObservable as default };
