import {
  EnumerableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";

const Enumerable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
  });

export default Enumerable_create;
