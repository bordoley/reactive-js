import {
  StreamEventType,
  StreamLike,
} from "./interfaces";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { mapTo } from "@reactive-js/observable";

export const emptyStream = <T>(): StreamLike<T> =>
  createAsyncEnumerable(mapTo({ type: StreamEventType.Complete }));
