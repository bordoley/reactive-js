import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Observable_withEffect: Observable.Signature["withEffect"] =
  DeferredReactiveSource.withEffect<
    unknown,
    ObserverLike<unknown>
  > as Observable.Signature["withEffect"];

export default Observable_withEffect;
