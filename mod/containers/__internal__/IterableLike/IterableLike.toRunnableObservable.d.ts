import { IterableLike } from "../../../containers.mjs";
import { ToRunnableObservable } from "../../../rx.mjs";
declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { toRunnableObservable as default };
