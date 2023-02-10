import { Zip } from "../../../containers.js";
import { EnumeratorLike } from "../../../ix.js";
import { SinkLike, ObservableLike } from "../../../rx.js";
interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
declare const Observable_zip: Zip<ObservableLike>["zip"];
export { EnumeratorSinkLike, Observable_zip as default };
