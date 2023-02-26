import { AsyncIterableLike } from "../containers.js";
import { ToAsyncEnumerable } from "../ix.js";
import { ToObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
import AsyncIterable_toAsyncEnumerable from "./AsyncIterable/__internal__/AsyncIterable.toAsyncEnumerable.js";
import AsyncIterable_toFlowable from "./AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";

export const toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"] =
  AsyncIterable_toAsyncEnumerable;

export const toFlowable: ToFlowable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toFlowable"] = AsyncIterable_toFlowable;

export const toObservable: ToObservable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toObservable"] = AsyncIterable_toObservable;
