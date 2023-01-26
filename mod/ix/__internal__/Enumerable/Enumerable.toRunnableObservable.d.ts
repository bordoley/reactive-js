import { EnumerableLike } from "../../../ix.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Enumerable_toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { Enumerable_toRunnableObservable as default };
