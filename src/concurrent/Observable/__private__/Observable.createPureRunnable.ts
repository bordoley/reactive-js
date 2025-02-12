import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createPureRunnable = <T>(f: SideEffect1<ObserverLike<T>>) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
  });

export default Observable_createPureRunnable;
