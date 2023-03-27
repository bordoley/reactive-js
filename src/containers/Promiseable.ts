import { Identity, PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Promiseable_toObservable from "./Promiseable/__internal__/Promiseable.toObservable.js";

export const identity: Identity<PromiseableLike>["identity"] =
  Container_identity;

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable_toObservable;
