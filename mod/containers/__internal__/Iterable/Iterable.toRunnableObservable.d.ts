import { IterableLike } from "../../../containers.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Iterable$toRunnableObservable: ToRunnableObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { Iterable$toRunnableObservable as default };
