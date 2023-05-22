import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { SideEffect1 } from "../../functions.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableLike,
} from "../../types.js";

const Runnable_create = <T>(f: SideEffect1<ObserverLike<T>>): RunnableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: true,
  });

export default Runnable_create;
