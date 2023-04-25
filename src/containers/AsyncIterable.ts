import { AsyncIterableLike, Identity } from "../containers.js";
import { EnumerateAsync, Flow, ToObservable } from "../rx.js";
import AsyncIterable_enumerateAsync from "./AsyncIterable/__internal__/AsyncIterable.enumerateAsync.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const enumerateAsync: EnumerateAsync<AsyncIterableLike>["enumerateAsync"] =
  AsyncIterable_enumerateAsync;

export const flow: Flow<AsyncIterableLike>["flow"] = AsyncIterable_flow;

export const identity: Identity<AsyncIterableLike>["identity"] =
  Container_identity;

export const toObservable: ToObservable<AsyncIterableLike>["toObservable"] =
  AsyncIterable_toObservable;
