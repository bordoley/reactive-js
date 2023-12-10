import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";

const Observable_isPure: Observable.Signature["isPure"] = (
  obs: ObservableLike,
): obs is ObservableLike & {
  [ObservableLike_isPure]: true;
} => obs[ObservableLike_isPure];

export default Observable_isPure;
