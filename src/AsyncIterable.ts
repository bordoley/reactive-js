import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import {
  Container,
  Container_T,
  Container_type,
  DeferredTypeClass,
  FlowableTypeClass,
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
 */
export interface AsyncIterableModule
  extends Pick<DeferredTypeClass<Type>, "toObservable">,
    FlowableTypeClass<Type> {}

export type Signature = AsyncIterableModule;

export const flow: Signature["flow"] = AsyncIterable_flow;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
