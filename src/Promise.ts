import Container_identity from "./Container/__internal__/Container.identity.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import { Containers, PromiseContainer } from "./types.js";

export const identity: Containers.TypeClass<PromiseContainer>["identity"] =
  Container_identity;

export const toObservable: Containers.TypeClass<PromiseContainer>["toObservable"] =
  Promise_toObservable;
