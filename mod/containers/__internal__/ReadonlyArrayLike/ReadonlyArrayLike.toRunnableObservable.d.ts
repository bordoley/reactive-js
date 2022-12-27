import { ReadonlyArrayLike } from "../../../containers.mjs";
import { ToRunnableObservable } from "../../../rx.mjs";
declare const toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    delay?: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
}>["toRunnableObservable"];
export { toRunnableObservable as default };
