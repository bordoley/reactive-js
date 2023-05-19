import AsyncIterable_flow from "./AsyncIterable/__internal__/AsyncIterable.flow.js";
import AsyncIterable_repeat from "./AsyncIterable/__internal__/AsyncIterable.repeat.js";
import AsyncIterable_retry from "./AsyncIterable/__internal__/AsyncIterable.retry.js";
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
  extends DeferredTypeClass<Type>,
    FlowableTypeClass<Type> {}

export type Signature = AsyncIterableModule;

export const flow: Signature["flow"] = AsyncIterable_flow;
export const repeat: Signature["repeat"] = AsyncIterable_repeat;
export const retry: Signature["retry"] = AsyncIterable_retry;
export const toObservable: Signature["toObservable"] =
  AsyncIterable_toObservable;
