import { SequenceLike } from "../../../containers.js";
import { ToRunnableObservable } from "../../../rx.js";
declare const Sequence_toRunnableObservable: ToRunnableObservable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export default Sequence_toRunnableObservable;
