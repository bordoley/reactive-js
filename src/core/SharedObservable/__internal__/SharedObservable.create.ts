import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  SharedObservableLike,
} from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";

const SharedObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): SharedObservableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  });

export default SharedObservable_create;
