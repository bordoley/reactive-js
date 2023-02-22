import { Zip } from "../../../containers.js";
import { EnumeratorLike } from "../../../ix.js";
import { ObservableLike, SinkLike } from "../../../rx.js";
export interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
declare const Observable_zip: Zip<ObservableLike>["zip"];
export default Observable_zip;
