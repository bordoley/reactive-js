import { Container, PromiseContainer } from "../containers.js";
import { Reactive } from "../rx.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";

export const identity: Container.Identity<PromiseContainer>["identity"] =
  Container_identity;

export const toObservable: Reactive.ToObservable<PromiseContainer>["toObservable"] =
  Promise_toObservable;
