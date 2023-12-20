import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  PureDeferredObservableLike,
} from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createPureDeferred = <T>(
  f: SideEffect1<ObserverLike<T>>,
): PureDeferredObservableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_createPureDeferred;
