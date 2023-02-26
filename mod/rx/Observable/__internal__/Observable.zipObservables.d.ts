import { EnumeratorLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
import { QueueLike } from "../../../util.js";
export interface QueuedEnumeratorLike<T = unknown> extends EnumeratorLike<T>, QueueLike<T> {
}
declare const Observable_zipObservables: (observables: readonly ObservableLike<any>[]) => ObservableLike<readonly any[]>;
export default Observable_zipObservables;
