import { IterableLike } from "../../../containers.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Iterable_toRunnableObservable: ToRunnableObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { Iterable_toRunnableObservable as default };
