import { AsyncIterableLike, Identity } from "../containers.js";
import { ToObservable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
import AsyncIterable_toAsyncEnumerable from "./AsyncIterable/__internal__/AsyncIterable.toAsyncEnumerable.js";
import AsyncIterable_toFlowable from "./AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const identity: Identity<AsyncIterableLike>["identity"] =
  Container_identity;

export const toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"] =
  AsyncIterable_toAsyncEnumerable;

export const toFlowable: ToFlowable<AsyncIterableLike>["toFlowable"] =
  AsyncIterable_toFlowable;

export const toObservable: ToObservable<AsyncIterableLike>["toObservable"] =
  AsyncIterable_toObservable;
