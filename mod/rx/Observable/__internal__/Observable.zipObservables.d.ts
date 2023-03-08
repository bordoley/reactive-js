import { EnumeratorLike } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike, QueueLike } from "../../../util.js";
export interface QueuedEnumeratorLike<T = unknown> extends EnumeratorLike<T>, QueueLike<T>, DisposableLike {
}
declare const Observable_zipObservables: (observables: readonly ObservableLike<any>[]) => ObservableLike<readonly any[]>;
export default Observable_zipObservables;
