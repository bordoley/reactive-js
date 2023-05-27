import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import type { DeferredObservableContainer } from "./Observable.js";
import {
  Container,
  Container_T,
  Container_type,
  FlowableContainerModule,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
  readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}

export type Type = AsyncIterableContainer;

/**
 * @noInheritDoc
 * @category Module
 */
export interface AsyncIterableModule
  // FIXME: Implement the ContainerModule apis
  extends Pick<
    FlowableContainerModule<Type, DeferredObservableContainer>,
    "flow" | "toObservable"
  > {}

export type Signature = AsyncIterableModule;

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
