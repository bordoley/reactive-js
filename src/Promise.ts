import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { PromiseContainer } from "./types.js";

export type Type = PromiseContainer;
export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {}

export const toObservable: Signature["toObservable"] = Promise_toObservable;
