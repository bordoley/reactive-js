import Store_toSharedObservable from "./Store/__internal__/Store.toSharedObservable.js";
import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { StoreContainer } from "./types.js";

export type Type = StoreContainer;

export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {}

export const toSharedObservable: Signature["toSharedObservable"] =
  Store_toSharedObservable;
