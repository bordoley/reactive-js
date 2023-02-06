import { EnumeratorLike } from "../../ix.js";
import { SinkLike } from "../../rx.js";
interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
export { EnumeratorSinkLike };
