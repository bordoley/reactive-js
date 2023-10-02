import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";

const Observable_createMulticast = <T>(f: SideEffect1<ObserverLike<T>>) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_createMulticast;
