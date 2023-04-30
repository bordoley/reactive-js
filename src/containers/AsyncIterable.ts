import { AsyncIterableContainer, Identity } from "../containers.js";
import { Flow, ToObservable } from "../rx.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const flow: Flow<AsyncIterableContainer>["flow"] = AsyncIterable_flow;
export const identity: Identity<AsyncIterableContainer>["identity"] =
  Container_identity;
export const toObservable: ToObservable<AsyncIterableContainer>["toObservable"] =
  AsyncIterable_toObservable;
