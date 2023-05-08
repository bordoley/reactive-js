import { AsyncIterableContainer, Container } from "../core.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const flow: Container.TypeClass<AsyncIterableContainer>["flow"] =
  AsyncIterable_flow;
export const identity: Container.TypeClass<AsyncIterableContainer>["identity"] =
  Container_identity;
export const toObservable: Container.TypeClass<AsyncIterableContainer>["toObservable"] =
  AsyncIterable_toObservable;
