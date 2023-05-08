import {
  DeferredObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";

const DeferredObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): DeferredObservableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
  });

export default DeferredObservable_create;
