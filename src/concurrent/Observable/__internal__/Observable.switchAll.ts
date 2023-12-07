import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import Observable_lift from "./Observable.lift.js";

const Observable_switchAll: Observable.Signature["switchAll"] = ((options?: {
  readonly [ObservableLike_isDeferred]?: boolean;
  readonly [ObservableLike_isPure]?: boolean;
  readonly [ObservableLike_isRunnable]?: boolean;
}) =>
  Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
  })(Observer_createSwitchAllObserver)) as Observable.Signature["switchAll"];

export default Observable_switchAll;
