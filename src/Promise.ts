import Promise_addEventHandler from "./Promise/__internal__/Promise.addEventHandler.js";
import Promise_toEventSource from "./Promise/__internal__/Promise.toEventSource.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import {
  Container,
  Container_T,
  Container_type,
  MulticastableTypeClass,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
  readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}

export type Type = PromiseContainer;

export interface PromiseModule extends MulticastableTypeClass<Type> {}

export type Signature = PromiseModule;

export const addEventHandler: Signature["addEventHandler"] =
  Promise_addEventHandler;
export const toEventSource: Signature["toEventSource"] = Promise_toEventSource;
export const toObservable: Signature["toObservable"] = Promise_toObservable;
