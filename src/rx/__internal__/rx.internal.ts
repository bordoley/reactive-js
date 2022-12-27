import { EnumeratorLike } from "../../ix";
import { SinkLike } from "../../rx";

export interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {}

export const DelegatingSinkLike_delegate = Symbol(
  "DelegatingSinkLike_delegate",
);

export interface DelegateSinkLike<T> extends SinkLike<T> {
  [DelegatingSinkLike_delegate]: SinkLike<T>;
}
