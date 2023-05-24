import type * as Observable from "../../Observable.js";
import { ObservableLike, ObservableLike_isPure } from "../../types.js";

const Observable_isPure: Observable.Signature["isPure"] = (
  obs: ObservableLike,
): obs is ObservableLike & {
  [ObservableLike_isPure]: true;
} => obs[ObservableLike_isPure];

export default Observable_isPure;
