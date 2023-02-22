import { EnumerableLike } from "../../../ix.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Enumerable_toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export default Enumerable_toRunnableObservable;
