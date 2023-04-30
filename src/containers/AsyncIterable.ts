import { AsyncIterableContainerLike, Identity } from "../containers.js";
import { Flow, ToObservable } from "../rx.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const flow: Flow<AsyncIterableContainerLike>["flow"] =
  AsyncIterable_flow;
export const identity: Identity<AsyncIterableContainerLike>["identity"] =
  Container_identity;
export const toObservable: ToObservable<AsyncIterableContainerLike>["toObservable"] =
  AsyncIterable_toObservable;
