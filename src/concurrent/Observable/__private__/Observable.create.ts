import { ComputationLike_isPure } from "../../../computations.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_create: Observable.Signature["create"] = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
  });

export default Observable_create;
