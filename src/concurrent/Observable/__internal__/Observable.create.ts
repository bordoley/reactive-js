import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { SideEffect1 } from "../../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike } from "../../../concurrent.js";

const Observable_create: Observable.Signature["create"] = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_create;
