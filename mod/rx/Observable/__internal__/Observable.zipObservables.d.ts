import { EnumeratorLike } from "../../../ix.js";
import { ObservableLike, SinkLike } from "../../../rx.js";
export interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
declare const Observable_zipObservables: (observables: readonly ObservableLike<any>[]) => ObservableLike<readonly any[]>;
export default Observable_zipObservables;
