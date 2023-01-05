import { ReadonlyArrayLike } from "../../../containers.mjs";
import { ToRunnableObservable } from "../../../rx.mjs";
declare const ReadonlyArrayLike__toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}>["toRunnableObservable"];
export { ReadonlyArrayLike__toRunnableObservable as default };
