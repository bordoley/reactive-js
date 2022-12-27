import { EnumeratorLike } from "../../ix.mjs";
import { SinkLike } from "../../rx.mjs";
interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {
}
declare const DelegatingSinkLike_delegate: unique symbol;
interface DelegateSinkLike<T> extends SinkLike<T> {
    [DelegatingSinkLike_delegate]: SinkLike<T>;
}
export { DelegateSinkLike, DelegatingSinkLike_delegate, EnumeratorSinkLike };
