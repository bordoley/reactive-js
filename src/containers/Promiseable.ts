import { PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
import Promiseable_toObservable from "./Promiseable/__internal__/Promiseable.toObservable.js";

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable_toObservable;
