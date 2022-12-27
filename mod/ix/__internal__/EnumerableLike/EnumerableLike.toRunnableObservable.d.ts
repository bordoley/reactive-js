import { EnumerableLike } from "../../../ix.mjs";
import { ToRunnableObservable } from "../../../rx.mjs";
declare const toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { toRunnableObservable as default };
