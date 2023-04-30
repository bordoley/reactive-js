import { Identity, PromiseContainer } from "../containers.js";
import { ToObservable } from "../rx.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";

export const identity: Identity<PromiseContainer>["identity"] =
  Container_identity;

export const toObservable: ToObservable<PromiseContainer>["toObservable"] =
  Promise_toObservable;
