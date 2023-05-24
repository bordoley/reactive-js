import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { SideEffect1 } from "../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike_isPure,
  ObserverLike,
} from "../../types.js";

const MulticastObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): MulticastObservableLike<T> =>
  Observable_createWithConfig(f, {
    [ObservableLike_isPure]: true,
  });

export default MulticastObservable_create;
