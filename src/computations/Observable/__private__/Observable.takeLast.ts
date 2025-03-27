import { ComputationModuleLike_computationType } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Observable_genPure } from "./Observable.gen.js";

const m: {
  genPure: Observable.Signature["genPure"];
  [ComputationModuleLike_computationType]?: Observable.Computation;
} = {
  genPure: Observable_genPure,
};
const Observable_takeLast: Observable.Signature["takeLast"] = (<T>(options?: {
  readonly count?: number;
}) =>
  DeferredSource.createTakeLast(m)<ObserverLike<T>, T>(
    Observer.takeLast,
    options,
  )) as Observable.Signature["takeLast"];

export default Observable_takeLast;
