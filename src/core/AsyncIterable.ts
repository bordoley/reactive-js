import {
  AsyncIterableContainer,
  Containers,
  DeferredContainers,
} from "../core.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const flow: DeferredContainers.TypeClass<AsyncIterableContainer>["flow"] =
  AsyncIterable_flow;
export const identity: Containers.TypeClass<AsyncIterableContainer>["identity"] =
  Container_identity;
export const toObservable: Containers.TypeClass<AsyncIterableContainer>["toObservable"] =
  AsyncIterable_toObservable;
