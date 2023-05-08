import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableLike,
} from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";

const Runnable_create = <T>(f: SideEffect1<ObserverLike<T>>): RunnableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
  });

export default Runnable_create;
