import {
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";

const Observable_isDeferred: Observable.Signature["isDeferred"] = (
  obs: ObservableLike,
): obs is ObservableLike & {
  [ObservableLike_isDeferred]: true;
} => obs[ObservableLike_isDeferred];

export default Observable_isDeferred;
