import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { SideEffect1 } from "../../functions.js";
import { ObservableLike_isDeferred, ObserverLike } from "../../types.js";

const Observable_create: Observable.Signature["create"] = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
  });

export default Observable_create;
