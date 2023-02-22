import { IterableLike } from "../../../containers.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Iterable_toRunnableObservable: ToRunnableObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export default Iterable_toRunnableObservable;
