import { ComputationLike_isPure } from "../../../computations.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_createMulticast = <T>(f: SideEffect1<ObserverLike<T>>) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_createMulticast;
