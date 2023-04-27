import { AsyncIterableLike, Identity } from "../containers.js";
import { Flow, ToInteractiveObservable, ToObservable } from "../rx.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toInteractiveObservable from "./AsyncIterable/__internal__/AsyncIterable.toInteractiveObservable.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
export const flow: Flow<AsyncIterableLike>["flow"] = AsyncIterable_flow;

export const identity: Identity<AsyncIterableLike>["identity"] =
  Container_identity;

export const toInteractiveObservable: ToInteractiveObservable<AsyncIterableLike>["toInteractiveObservable"] =
  AsyncIterable_toInteractiveObservable;

export const toObservable: ToObservable<AsyncIterableLike>["toObservable"] =
  AsyncIterable_toObservable;
