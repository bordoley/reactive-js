import { AsyncIterableContainer, Container } from "../containers.js";
import { Reactive } from "../rx.js";
import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "./Container/__internal__/Container.identity.js";

export const flow: Reactive.Flow<AsyncIterableContainer>["flow"] =
  AsyncIterable_flow;
export const identity: Container.Identity<AsyncIterableContainer>["identity"] =
  Container_identity;
export const toObservable: Reactive.ToObservable<AsyncIterableContainer>["toObservable"] =
  AsyncIterable_toObservable;
