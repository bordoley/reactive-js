import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_withEffect: Observable.Signature["withEffect"] =
  DeferredEventSource.withEffect<
    unknown,
    ObserverLike<unknown>
  > as Observable.Signature["withEffect"];

export default Observable_withEffect;
