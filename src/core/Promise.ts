import { Container, PromiseContainer } from "../core.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";

export const identity: Container.TypeClass<PromiseContainer>["identity"] =
  Container_identity;

export const toObservable: Container.TypeClass<PromiseContainer>["toObservable"] =
  Promise_toObservable;
