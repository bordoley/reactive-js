import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";

const Observable_isRunnable: Observable.Signature["isRunnable"] = (
  obs: ObservableLike,
): obs is ObservableLike & {
  [ObservableLike_isDeferred]: true;
  [ObservableLike_isRunnable]: true;
} => obs[ObservableLike_isRunnable] && obs[ObservableLike_isDeferred];

export default Observable_isRunnable;
