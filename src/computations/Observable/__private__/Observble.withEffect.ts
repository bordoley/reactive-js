import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Observable_withEffect: Observable.Signature["withEffect"] =
  DeferredSource.withEffect<
    unknown,
    ObserverLike<unknown>
  > as Observable.Signature["withEffect"];

export default Observable_withEffect;
