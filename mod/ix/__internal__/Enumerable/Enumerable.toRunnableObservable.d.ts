import { EnumerableLike } from "../../../ix.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Enumerable$toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { Enumerable$toRunnableObservable as default };
