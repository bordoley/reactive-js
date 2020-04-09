import { empty as emptyObs } from "@reactive-js/observable";
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerable } from "./createAsyncEnumerable";

const instance = createAsyncEnumerable<any, any>(_ => emptyObs());

/**
 * Returns an empty `AsyncEnumerableLike` that always returns
 * a disposed `AsyncEnumeratorLike` instance.
 */
export const empty = <TReq, T>(): AsyncEnumerableLike<TReq, T> => instance;
