import {
  MulticastObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { Factory, invoke, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_defer: Observable.Signature["defer"] = <T>(
  factory: Factory<MulticastObservableLike<T>>,
) =>
  Observable_createWithConfig<T>(
    observer => {
      pipe(factory(), invoke(ObservableLike_observe, observer));
    },
    {
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isPure]: true,
      [ObservableLike_isRunnable]: false,
    },
  );

export default Observable_defer;
