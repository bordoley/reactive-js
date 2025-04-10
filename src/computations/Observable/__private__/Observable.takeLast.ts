import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_takeLast: Observable.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredEventSource.takeLast<ObserverLike<T>, T>(
    Observable_genPure,
    Observer.takeLast,
    options,
  )) as Observable.Signature["takeLast"];

export default Observable_takeLast;
