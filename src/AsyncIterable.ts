import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import { Function1 } from "./functions.js";
import {
  Container,
  ContainerModule,
  Container_T,
  Container_type,
  DeferredObservableLike,
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
  extends Omit<FlowableContainerModule<Type>, keyof ContainerModule<Type>> {
  toObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}

export type Signature = AsyncIterableModule;

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
