import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_takeLast: Observable.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredReactiveSource.takeLast<ObserverLike<T>, T>(
    Observable_genPure,
    Observer.takeLast,
    options,
  )) as Observable.Signature["takeLast"];

export default Observable_takeLast;
