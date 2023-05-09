import Container_identity from "./Container/__internal__/Container.identity.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import { PromiseContainer } from "./containers.js";

export const identity: PromiseContainer.TypeClass["identity"] =
  Container_identity;

export const toObservable: PromiseContainer.TypeClass["toObservable"] =
  Promise_toObservable;
