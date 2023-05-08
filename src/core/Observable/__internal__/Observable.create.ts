import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_create = <T>(
  f: SideEffect1<ObserverLike>,
): ObservableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_create;
