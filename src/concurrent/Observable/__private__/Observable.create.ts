import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_create: Observable.Signature["create"] = <T>(
  f: SideEffect1<ObserverLike<T>>,
) =>
  Observable_createWithConfig(f, {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
  });

export default Observable_create;
