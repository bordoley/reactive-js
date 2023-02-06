import { EnumeratorLike } from "../../ix";
import { SinkLike } from "../../rx";

export interface EnumeratorSinkLike<T> extends EnumeratorLike<T>, SinkLike<T> {}
