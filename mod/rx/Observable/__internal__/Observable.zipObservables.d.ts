import { ObservableLike } from "../../../rx.js";
import { EnumeratorLike, QueueLike } from "../../../util.js";
export interface QueuedEnumeratorLike<T = unknown> extends EnumeratorLike<T>, QueueLike<T> {
}
declare const Observable_zipObservables: (observables: readonly ObservableLike<any>[]) => ObservableLike<readonly any[]>;
export default Observable_zipObservables;
