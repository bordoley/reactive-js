import Promise_toSharedObservable from "./Promise/__internal__/Promise.toSharedObservable.js";
import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { PromiseContainer } from "./types.js";

export type Type = PromiseContainer;
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {}

export const toSharedObservable: Signature["toSharedObservable"] =
  Promise_toSharedObservable;
