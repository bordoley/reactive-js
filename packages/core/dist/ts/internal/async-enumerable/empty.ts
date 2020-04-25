import { empty as emptyObs } from "../../observable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";
import { createAsyncEnumerable } from "./createAsyncEnumerable.ts";

const instance = createAsyncEnumerable<any, any>(_ => emptyObs());

/**
 * Returns an empty `AsyncEnumerableLike` that always returns
 * a disposed `AsyncEnumeratorLike` instance.
 */
export const empty = <TReq, T>(): AsyncEnumerableLike<TReq, T> => instance;
