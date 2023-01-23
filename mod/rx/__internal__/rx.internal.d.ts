import { EnumeratorLike } from "../../ix.js";
import { SinkLike } from "../../rx.js";
interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
declare const DelegatingSinkLike_delegate: unique symbol;
interface DelegateSinkLike<T> extends SinkLike<T> {
    [DelegatingSinkLike_delegate]: SinkLike<T>;
}
export { DelegateSinkLike, DelegatingSinkLike_delegate, EnumeratorSinkLike };
