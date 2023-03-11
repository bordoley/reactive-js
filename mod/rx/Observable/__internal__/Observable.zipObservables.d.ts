import { EnumeratorLike } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike, QueueableLike } from "../../../util.js";
export interface QueuedEnumeratorLike<T = unknown> extends EnumeratorLike<T>, QueueableLike<T>, DisposableLike {
}
declare const Observable_zipObservables: (observables: readonly ObservableLike<any>[]) => ObservableLike<readonly any[]>;
export default Observable_zipObservables;
